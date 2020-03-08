import React, { useEffect, useState } from 'react';
import StockListContainer from '../../../containers/StockList';
import OverviewContainer from './../../../containers/Portfolio/Overview';
import { getCurrentPrices } from '../../../api/helpers';

const Portfolio = ({ portfolio, setCurrentPrices, setModalIsOpen }) => {
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const symbols = Object.keys(portfolio);
    if (symbols.length > 0) {
      getCurrentPrices(symbols)
        .then(({ data }) => setCurrentPrices(data))
        .catch(err => console.error(err.message));
    }
  }, [refresh]);

  return (
    <div id="portfolio-container">
      <OverviewContainer
        setModalIsOpen={setModalIsOpen}
        refresh={refresh}
        setRefresh={setRefresh}
      />
      <StockListContainer />
    </div>
  );
};

export default Portfolio;
