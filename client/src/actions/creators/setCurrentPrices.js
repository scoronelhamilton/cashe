import { SET_CURRENT_PRICES } from '../index';

const setCurrentPrices = prices => ({
  type: SET_CURRENT_PRICES,
  payload: prices,
});

export default setCurrentPrices;
