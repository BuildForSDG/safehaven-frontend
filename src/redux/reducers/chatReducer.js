import * as types from '../actions/actionTypes';


export const initialState = {
  otherUuid: '',
  patients: {},
  consultants: {},
  consultant: {},
  error: null,
  messages: []
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

    default:
      return state;
  }
};

export default chatReducer;