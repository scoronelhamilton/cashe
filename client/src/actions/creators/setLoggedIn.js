import { SET_LOGGED_IN } from '../index';

export default isLoggedIn => ({
  type: SET_LOGGED_IN,
  payload: isLoggedIn,
});
