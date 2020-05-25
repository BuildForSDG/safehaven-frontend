import { combineReducers } from 'redux';
import authReducer from './authReducer';
import styleNavbarReducer from './styleNavbarReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  navbarStyle: styleNavbarReducer
});

export default rootReducer;
