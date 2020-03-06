import Axios from 'axios';

export const getUserInfo = () => {
  return Axios.get('/user');
};

export const getAllTransactions = () => {
  return Axios.get('/transactions');
};
