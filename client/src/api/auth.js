import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import Store from 'store';

const TOKEN_NAME = 'auth_token';

export const saveToken = token => {
  Store.set(TOKEN_NAME, token);
};

export const setHeaders = () => {
  const token = Store.get(TOKEN_NAME);
  Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const verifyUser = () => {
  return Axios.get('/verify');
};

export const registerUser = userInfo => {
  return Axios.post('/register', userInfo)
    .then(({ data }) => data)
    .catch(e => {
      throw new Error(e.message);
    });
};

export const logIn = (email, password) => {
  return Axios.post('/login', {
    email,
    password,
  });
};

export const logOut = () => {
  Store.remove(TOKEN_NAME);
};
