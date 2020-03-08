import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './containers/App';
import store from './store/store';
import FontAwesomeLibrary from './icons/fontAwesome';

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

const root = document.getElementById('app');
ReactDOM.render(<App />, root);
