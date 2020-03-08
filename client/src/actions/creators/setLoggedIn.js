import { SET_LOGGED_IN } from '../index';

const setIsLoggedIn = isLoggedIn => ({
  type: SET_LOGGED_IN,
  payload: isLoggedIn,
});

export default setIsLoggedIn;
