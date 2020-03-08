import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import StockListContainer from '../../../containers/StockList';
import TradeFormContainer from '../../../containers/TradeForm';
import Overview from './Overview';
import { getCurrentPrices } from '../../../api/helpers';

const Portfolio = ({ portfolio, setCurrentPrices }) => {
  const intervalIds = [];

  useEffect(() => {
    const symbols = Object.keys(portfolio).join(',');
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
      .then(({ data }) => setCurrentPrices(data))
      .catch(err => {
        cleanup(ids);
        console.error(err.message);
      });
  };

  return (
    <div id="portfolio-container">
      <Overview />
      <StockListContainer />
      {/* <TradeFormContainer /> */}
    </div>
  );
};

export default Portfolio;
