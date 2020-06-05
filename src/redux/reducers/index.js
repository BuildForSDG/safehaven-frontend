import { combineReducers } from 'redux';
import authReducer from './authReducer';
import styleNavbarReducer from './styleNavbarReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  navbarStyle: styleNavbarReducer,
  profile: profileReducer
});

export default rootReducer;
