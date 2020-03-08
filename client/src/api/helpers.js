import Axios from 'axios';

export const getUserInfo = () => {
  return Axios.get('/user');
};

export const getAllTransactions = () => {
  return Axios.get('/transactions');
};

export const getAllSymbols = () => {
  return Axios.get('/symbols');
};

export const getOpeningPrices = symbols => {
  return Axios.get('/opening-prices', {
    params: { symbols },
  });
};

export const getCurrentPrices = symbols => {
  return Axios.get('/prices', {
    params: { symbols: symbols },
  });
};

export const buyStock = (symbol, amount) => {
  return Axios.post('/stock', {
    symbol,
    amount,
  });
};
