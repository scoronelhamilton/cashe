import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import StockList from './StockList';
import TradeFormContainer from '../../../containers/TradeForm';
import { getCurrentPrices } from '../../../api/helpers';

const Portfolio = ({ portfolio, setCurrentPrices }) => {
  useEffect(() => {
    const symbols = Object.keys(portfolio).join(',');
    fetchData(symbols);
    const intervalId = setInterval(() => fetchData(symbols), 10000);

    return () => clearInterval(intervalId);
  }, []);

  const fetchData = symbols => {
    getCurrentPrices(symbols)
      .then(({ data }) => setCurrentPrices(data))
      .catch(err => handleError(err));
  };

  const history = useHistory();
  const handleError = err => {
    if ([401, 403].indexOf(err.status).indexOf !== -1) {
      history.push('/login');
    }
  };

  return (
    <>
      <h2>Portfolio</h2>
      {/* <StockList /> */}
      <TradeFormContainer />
    </>
  );
};

export default Portfolio;
