import { SET_OPENING_PRICES } from '../index';

const setOpeningPrices = prices => ({
  type: SET_OPENING_PRICES,
  payload: prices,
});

export default setOpeningPrices;
