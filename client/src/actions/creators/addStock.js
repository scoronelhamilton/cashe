import { ADD_STOCK } from '../index';

const addStock = transactionData => ({
  type: ADD_STOCK,
  payload: transactionData,
});

export default addStock;
