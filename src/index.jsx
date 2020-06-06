import React from 'react';
import axios from 'axios'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store/store';
import baseUrl from './config/baseUrl';
import './index.scss';

axios.defaults.baseURL = baseUrl

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
