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

export const getOpeningPrices = () => {
  return Axios.get('/opening-prices');
};

export const getCurrentPrices = symbols => {
  return Axios.get('/prices', {
    params: { symbols: symbols },
  });
};

export const addStock = (symbol, amount) => {
  return Axios.post('/stock', {
    symbol,
    amount,
  });
};
