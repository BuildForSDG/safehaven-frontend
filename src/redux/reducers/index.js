import { combineReducers } from 'redux';
import authReducer from './authReducer';
import styleNavbarReducer from './styleNavbarReducer';
import profileReducer from './profileReducer';
import chatReducer from './chatReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  navbarStyle: styleNavbarReducer,
  profile: profileReducer,
  chat: chatReducer
});

export default rootReducer;
