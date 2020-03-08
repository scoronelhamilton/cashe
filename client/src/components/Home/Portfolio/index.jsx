import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import StockListContainer from '../../../containers/StockList';
// import TradeFormContainer from '../../../containers/TradeForm';
import OverviewContainer from './../../../containers/Portfolio/Overview';
import { getCurrentPrices } from '../../../api/helpers';

const Portfolio = ({ portfolio, setCurrentPrices, setModalIsOpen }) => {
  const intervalIds = [];

  useEffect(() => {
    const symbols = Object.keys(portfolio).join(',');
    console.log(symbols);
    cleanup(intervalIds);
    fetchData(symbols);

    intervalIds.push(setInterval(() => fetchData(symbols), 8000));
    return () => cleanup(intervalIds);
  }, [portfolio]);

  const cleanup = ids => {
    ids.forEach(id => {
      clearInterval(id);
    });
  };

  const fetchData = symbols => {
    getCurrentPrices(symbols)
      .then(({ data }) => {
        console.log(data);
        setCurrentPrices(data);
      })
      .catch(err => {
        cleanup(intervalIds);
        console.error(err.message);
      });
  };

  return (
    <div id="portfolio-container">
      <OverviewContainer setModalIsOpen={setModalIsOpen} />
      <StockListContainer />
      {/* <TradeFormContainer /> */}
    </div>
  );
};

export default Portfolio;
