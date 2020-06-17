import { get } from 'axios';
import dotenv from 'dotenv';
import * as actionTypes from './actionTypes';

dotenv.config();

const getConsultants = () => {
  const token = localStorage.getItem("SHtoken");
  return async dispatch => {
    try {
      const request = await get(`/consultants/${token}`,);
      dispatch(
        {
          type: actionTypes.GET_CONSULTANTS,
          payload: request.data.data
        }
      );
    } catch (error) {
      dispatch({
        type: actionTypes.GET_CONSULTANTS_ERROR,
        payload: error.response.data
      });
    }
  }
};

const setOtherUser = (uuid) => ({
  type: actionTypes.SET_OTHER_USER,
  payload: uuid
});

const setMessages = (messages, callback) => {
  callback();
  return {
    type: actionTypes.MESSAGES,
    payload: messages
  }
};

const getPatients = () => {
  const token = localStorage.getItem("SHtoken");
  return async dispatch => {
    try {
      const request = await get(`/patients/${token}`,);
      dispatch(
        {
          type: actionTypes.GET_PATIENTS,
          payload: request.data.data
        }
      );
    } catch (error) {
      dispatch({
        type: actionTypes.GET_PATIENTS_ERROR,
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


export { getConsultants, loading, clearError, getPatients, setOtherUser, setMessages };