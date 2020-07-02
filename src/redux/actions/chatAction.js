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
      dispatch(
        {
          type: actionTypes.CONSULTANTS_LOADED,
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

const setMessages = (messages) => {
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
      dispatch(
        {
          type: actionTypes.PATIENTS_LOADED,
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


const loadingMessages = () => ({
  type: actionTypes.LOADING_MESSAGE,
})

const messagesLoaded = () => ({
  type: actionTypes.MESSAGE_LOADED,
})

const sendingMessage = () => ({
  type: actionTypes.LOADING_MESSAGE,
})

const messageSent = () => ({
  type: actionTypes.MESSAGE_LOADED,
})

const patientsLoading = () => ({
  type: actionTypes.PATIENTS_LOADING,
})

const consultantsLoading = () => ({
  type: actionTypes.CONSULTANTS_LOADING,
})

export {
  getConsultants,
  sendingMessage,
  messageSent,
  loadingMessages,
  messagesLoaded,
  clearError,
  getPatients,
  setOtherUser,
  setMessages,
  patientsLoading,
  consultantsLoading
};