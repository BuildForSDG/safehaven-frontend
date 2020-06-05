import { get, patch } from 'axios';
import dotenv from 'dotenv';
import * as actionTypes from './actionTypes';

dotenv.config();

const BASE_URL = 'http://localhost:9000/api/v1';

const getProfile = () => {
    const token = localStorage.getItem("SHtoken");
  return async dispatch => {
    try {
      const request = await get(`${BASE_URL}/profile/${token}`, );
      dispatch(
        {
          type: actionTypes.GET_PROFILE,
          payload: request.data.data
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

const editProfile = (payload) => {
    const token = localStorage.getItem("SHtoken");
  return async dispatch => {
    try {
      const request = await patch(`${BASE_URL}/profile/${token}`, payload);
      dispatch(
        {
          type: actionTypes.EDIT_PROFILE,
          payload: request.data.data
        }
      );
    } catch (error) {
      dispatch({
        type: actionTypes.EDIT_PROFILE_ERROR,
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


export { getProfile, loading, editProfile, clearError };