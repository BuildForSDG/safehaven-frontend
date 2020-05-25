import * as types from '../actions/actionTypes';

const initialState = {
  backgroundColor: null
};

const styleNavbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_NAVBAR_STYLE:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default styleNavbarReducer;
