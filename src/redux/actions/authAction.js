import { post } from 'axios';
import dotenv from 'dotenv';
import * as actionTypes from './actionTypes';

dotenv.config();

const BASE_URL = 'http://localhost:9000/api/v1';

const signUp = (payload, pathname) => {
  const url = pathname === '/signup' ? `${BASE_URL}/auth/signup-patient` : `${BASE_URL}/auth/signup-consultant`;
  return async dispatch => {
    try {
      const request = await post(url, payload);
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
      const request = await post(`${BASE_URL}/auth/login`, payload);
      storeInLocal(request.data.createdToken, localStorage);
      
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

export { signUp, clearError, loading, signIn };