import { SET_CURRENT_PRICES } from '../index';

const setCurrentPrices = stocks => ({
  type: SET_CURRENT_PRICES,
  payload: stocks,
});

export default setCurrentPrices;
