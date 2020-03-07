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

export const getCurrentPrices = () => {
  return Axios.get('/prices');
};
