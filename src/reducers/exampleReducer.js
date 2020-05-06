import * as types from '../actions/actionTypes';

const initialState = {
  exampleText: 'dummy example'
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EXAMPLE_TYPE:
      return {
        ...state,
        exampleText: action.payload
      };

    default:
      return state;
  }
};

export default exampleReducer;
