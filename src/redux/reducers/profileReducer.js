import * as types from '../actions/actionTypes';


export const initialState = {
  user: {},
  error: null,
  loading: false,
  loadingProfile: false,
  editError: false,
  edited: false
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_PROFILE:
      return {
        ...state,
        user: action.payload,
        loading: false,
        edited: true,
        editError: null,
        error: null
      };

    case types.CLEAR:
      return {
        ...state,
        loading: false,
        editError: null,
        error: null
      };

    case types.LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        editError: null,
      };

      case types.LOADING_PROFILE:
      return {
        ...state,
        loadingProfile: true
      };

      case types.LOADED_PROFILE:
      return {
        ...state,
        loadingProfile: false
      };

    case types.EDIT_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        editError: action.payload.error,
        error: null
      };
    case types.GET_PROFILE:
      return {
        ...state,
        loading: false,
        edited: false,
        editError: null,
        user: action.payload,
        error: null
      };

    case types.PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };

    default:
      return state;
  }
};

export default profileReducer;