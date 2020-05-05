/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middleware = [thunk];
const createStoreMiddleware = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
)(createStore);

const store = createStoreMiddleware(rootReducer);

export default store;
