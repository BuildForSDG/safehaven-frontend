import * as types from '../actions/actionTypes';


const initialState = {
  success: {},
  error: null,
  loading: false,
  user: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_UP:
      return {
        ...state,
        loading: false,
        success: action.payload,
        error: null
      };

      case types.SIGN_IN:
        return {
          ...state,
          loading: false,
          success: action.payload,
          error: null
        };

    case types.CLEAR:        
      return {
        ...state,
        loading: false,
        error: null
      };

    case types.LOADING:        
      return {
        ...state,
        loading: true,
        error: null
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