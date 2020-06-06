import profileReducer, {
  initialState
} from '../../../redux/reducers/profileReducer';
import {
  GET_PROFILE,
  EDIT_PROFILE,
  EDIT_PROFILE_ERROR,
  ERROR
} from '../../../redux/actions/actionTypes';

describe('Get profile test cases', () => {
  it('sets success on successful signup', () => {
    const state = profileReducer(initialState, {
      type: GET_PROFILE,
      payload: { firstName: 'adaeze' }
    });
    expect(state.user).toEqual({ firstName: 'adaeze' });
  });
  it('sets error to object on unsuccessful signup', () => {
    const state = profileReducer(initialState, {
      type: ERROR,
      payload: { error: { status: 'error' } }
    });
    expect(state.error).toEqual(true);
  });
});

describe('Edit profile test cases', () => {
  it('sets success on successful signup', () => {
    const state = profileReducer(initialState, {
      type: EDIT_PROFILE,
      payload: { firstName: 'adaeze' }
    });
    expect(state.edited).toEqual(true);
  });
  it('sets error to object on unsuccessful signup', () => {
    const state = profileReducer(initialState, {
      type: EDIT_PROFILE_ERROR,
      payload: { error: { status: 'error' } }
    });
    expect(state.editError).toEqual({ status: 'error' });
  });
});
