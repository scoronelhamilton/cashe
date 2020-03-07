import React, { useEffect, useState } from 'react';
import StockList from './StockList';
import TradeFormContainer from '../../../containers/TradeForm';

const Portfolio = () => {
  return (
    <>
      <h2>Portfolio</h2>
      {/* <StockList /> */}
      <TradeFormContainer />
    </>
  );
};

export default Portfolio;
