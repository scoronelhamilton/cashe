import { SET_USER_INFO } from '../index';

const setUserInfo = info => ({
  type: SET_USER_INFO,
  payload: info,
});

export default setUserInfo;
