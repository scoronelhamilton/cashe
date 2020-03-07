import React, { useEffect, useState } from 'react';
import StockList from './StockList';
import TradeFormContainer from '../../../containers/TradeForm';
import { getCurrentPrices } from '../../../api/helpers';

const Portfolio = ({ portfolio, setCurrentPrices }) => {
  useEffect(() => {
    const symbols = Object.keys(portfolio).join(',');

    const intervalId = setInterval(() => {
      getCurrentPrices(symbols)
        .then(({ data }) => setCurrentPrices(data))
        .catch(err => console.error(err.message));
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <h2>Portfolio</h2>
      {/* <StockList /> */}
      <TradeFormContainer />
    </>
  );
};

export default Portfolio;
