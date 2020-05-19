import { post } from 'axios';
import * as actionTypes from './actionTypes';

const BASE_URL = 'http://localhost:9000/api/v1';

const signUp = (payload) => {
  return async dispatch => {
    // dispatch({ type: AUTH_LOADING });
    try {
      const request = await post(`${BASE_URL}/auth/signup`, payload);
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

const clearError = () => ({
  type: actionTypes.CLEAR,
})

const loading = () => ({
  type: actionTypes.LOADING,
})

export { signUp, clearError, loading };