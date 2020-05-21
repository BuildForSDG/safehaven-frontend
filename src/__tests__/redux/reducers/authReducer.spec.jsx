import authReducer, { initialState } from '../../../redux/reducers/authReducer';
import { SIGN_UP, ERROR, SIGN_IN } from '../../../redux/actions/actionTypes';

describe('SignUp test cases', () => {
  it('sets success on successful signup', () => {
    const state = authReducer(initialState, {
      type: SIGN_UP,
      payload: { status: 'success' }
    });
    expect(state.success).toEqual({ status: 'success' });
  });
  it('sets error to object on unsuccessful signup', () => {
    const state = authReducer(initialState, {
      type: ERROR,
      payload: { error: { status: 'error' } }
    });
    expect(state.error).toEqual({ status: 'error' });
  });
});

describe('SignIn test cases', () => {
  it('sets success on successful signin', () => {
    const state = authReducer(initialState, {
      type: SIGN_IN,
      payload: { status: 'success' }
    });
    expect(state.signedIn).toEqual(true);
  });
});
