import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import StockListContainer from '../../../containers/StockList';
import TradeFormContainer from '../../../containers/TradeForm';
import { getCurrentPrices } from '../../../api/helpers';

const Portfolio = ({ portfolio, setCurrentPrices }) => {
  const intervalIds = [];

  useEffect(() => {
    const symbols = Object.keys(portfolio).join(',');
    if (symbols.length) fetchData(symbols);

    cleanup(intervalIds);
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
      <StockListContainer />
      <TradeFormContainer />
    </>
  );
};

export default Portfolio;
