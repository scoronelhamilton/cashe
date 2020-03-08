import { combineReducers } from 'redux';
import stocks from './stocks';
import user from './user';

const rootReducer = combineReducers({
  user,
  stocks,
});

export default rootReducer;
