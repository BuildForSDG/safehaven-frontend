import { post } from 'axios';
import dotenv from 'dotenv';
import * as actionTypes from './actionTypes';

dotenv.config();

const signUp = (payload, pathname) => {
  const url = pathname === '/signup' ? `/auth/signup-patient` : `/auth/signup-consultant`;
  const userDetails = pathname === '/signup' ? {...payload, role: 'patient'} : {...payload, role: 'consultant'};

  return async dispatch => {
    try {
      const request = await post(url, userDetails);
      dispatch(
        {
          type: actionTypes.SIGN_UP,
          payload: request.data
        }
      );
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR,
        payload: error.response.data
      });
    }
  }
};

const storeInLocal = (token, localStorage) => {
  localStorage.setItem('SHtoken', token);
}

const signIn = (payload) => {
  return async dispatch => {
    try {
      const request = await post(`/auth/login`, payload);
      storeInLocal(request.data.data.token, localStorage);
      dispatch(
        {
          type: actionTypes.SIGN_IN,
        }
      );
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR,
        payload: error.response.data
      });
    }
  }
};


const clearError = () => ({
  type: actionTypes.CLEAR,
})

const loading = () => ({
  type: actionTypes.LOADING,
})

const clearSuccess = () => ({
  type: actionTypes.CLEAR_SIGN_UP,
})

export { signUp, clearError, loading, signIn, clearSuccess };