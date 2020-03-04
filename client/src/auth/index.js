import Store from 'store';
import Axios from 'axios';

const TOKEN_NAME = 'auth_token';

export const setToken = token => {
  Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const isUserVerified = () => {
  const token = Store.get(TOKEN_NAME);
  const options = {
    headers: { authorization: `Bearer ${token}` }
  };
  return Axios.get('/verify', options)
    .then(() => true)
    .catch(e => false);
};

export const registerUser = userInfo => {
  return Axios.post('/register', userInfo)
    .then(({ data }) => {
      Store.set(TOKEN_NAME, data.token);
      return data;
    })
    .catch(e => {
      throw new Error(e.message);
    });
};

export const logOut = () => {
  Store.remove(TOKEN_NAME);
};
