import { SET_SYMBOLS_LIST } from '../index';

const setSymbolsList = symbols => ({
  type: SET_SYMBOLS_LIST,
  payload: symbols,
});

export default setSymbolsList;
