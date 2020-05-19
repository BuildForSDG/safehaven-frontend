import * as types from '../actions/actionTypes';


const initialState = {
  success: {},
  error: {},
  loading: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_UP:
        
      return {
        ...state,
        loading: false,
        success: action.payload,
        error: {}
      };

    case types.CLEAR:        
      return {
        ...state,
        loading: false,
        error: {}
      };

    case types.LOADING:        
      return {
        ...state,
        loading: true,
        error: {}
      };

    case types.ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };

    default:
      return state;
  }
};

export default authReducer;