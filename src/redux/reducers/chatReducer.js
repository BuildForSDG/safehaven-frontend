import * as types from '../actions/actionTypes';


export const initialState = {
  otherUuid: '',
  patients: {},
  consultants: {},
  consultant: {},
  error: null,
  messages: [],
  loadingMessages: false,
  sending: false,
  consultantsLoading: false,
  patientsLoading: false
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CONSULTANTS:
      return {
        ...state,
        consultants: action.payload,
        consultant: action.payload[0],
        error: null
      };

    case types.GET_CONSULTANTS_ERROR:
      return {
        ...state,
        consultants: {},
        error: action.payload.error
      };

    case types.GET_PATIENTS:
      return {
        ...state,
        patients: action.payload,
        error: null
      };

    case types.GET_PATIENTS_ERROR:
      return {
        ...state,
        consultants: {},
        error: action.payload.error
      };

    case types.MESSAGES:
      return {
        ...state,
        messages: action.payload
      };

    case types.SET_OTHER_USER:
      return {
        ...state,
        otherUuid: action.payload
      };

    case types.LOADING_MESSAGE:
      return {
        ...state,
        loadingMessages: true
      };

    case types.MESSAGE_LOADED:
      return {
        ...state,
        loadingMessages: false
      };

    case types.SENDING_MESSAGE:
      return {
        ...state,
        sending: true
      };

    case types.MESSAGE_SENT:
      return {
        ...state,
        sending: false
      };

    case types.PATIENTS_LOADED:
      return {
        ...state,
        patientsLoading: false
      }

    case types.CONSULTANTS_LOADED:
      return {
        ...state,
        consultantsLoading: false
      }

    case types.PATIENTS_LOADING:
      return {
        ...state,
        patientsLoading: true
      }

    case types.CONSULTANTS_LOADING:
      return {
        ...state,
        consultantsLoading: false
      }

    default:
      return state;
  }
};

export default chatReducer;