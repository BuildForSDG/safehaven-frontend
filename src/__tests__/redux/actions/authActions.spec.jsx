import moxios from 'moxios';
import axios from 'axios';
import { signUp, signIn } from '../../../redux/actions/authAction';
import mockStore from '../../../__mocks__/storeMock';
import { SIGN_UP, ERROR, SIGN_IN } from '../../../redux/actions/actionTypes';

describe('Sign Up User action creator', () => {
  jest.setTimeout(30000);
  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

  it('dispatches SIGN_UP type action with the expected payload when signup is successful', async () => {
    const store = mockStore({
      success: {},
      error: null,
      loading: false,
      user: {}
    });
    const mockDetails = {
      name: 'abc',
      email: 'abc@yahoo.com',
      phoneNumber: '081635327364',
      password: '123'
    };

    const mockResponse = {
      status: 200,
      response: {
        status: 'success',
        data: {
          message: 'user created successfully'
        }
      }
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockResponse);
    });

    await store.dispatch(signUp(mockDetails));
    expect(store.getActions()).toEqual([
      {
        type: SIGN_UP,
        payload: {
          status: 'success',
          data: { message: 'user created successfully' }
        }
      }
    ]);
  });

  it('dispatches SIGN_UP type action with the expected payload when signup is successful', async () => {
    const store = mockStore({
      success: {},
      error: null,
      loading: false,
      user: {}
    });
    const mockDetails = {
      name: 'abc',
      email: 'abc@yahoo.com',
      phoneNumber: '081635327364',
      password: '123'
    };

    const mockResponse = {
      status: 200,
      response: {
        status: 'success',
        data: {
          message: 'user created successfully'
        }
      }
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockResponse);
    });

    await store.dispatch(signUp(mockDetails, '/signup'));
    expect(store.getActions()).toEqual([
      {
        type: SIGN_UP,
        payload: {
          status: 'success',
          data: { message: 'user created successfully' }
        }
      }
    ]);
  });

  it("dispatches ERROR type action when login is unsuccesful due to server or network errors", async () => {
    const store = mockStore({
      success: {},
      error: null,
      loading: false,
      user: {}
    });
    const mockDetails = {
      name: "abc",
      email: "abc@yahoo.com",
      phoneNumber: "081635327364",
      password: "123",
    };

    const mockResponse = {
      status: 500,
      response: {}
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockResponse);
    });

    await store.dispatch(signUp(mockDetails));
    expect(store.getActions()).toEqual([
      {
        type: ERROR,
        payload: {}
      }
    ]);
  });
});

describe('Sign In User action creator', () => {
  jest.setTimeout(30000);
  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

  it('dispatches SIGN_IN type action with the expected payload', async () => {
    const store = mockStore({
      success: {},
      error: null,
      loading: false,
      user: {}
    });
    const mockDetails = {
      email: 'abc@yahoo.com',
      password: '123'
    };

    const mockResponse = {
      status: 200,
      response: {
        status: 'success',
        data: {
          token: 'ec.ooimkjhgt5dfghj'
        }
      }
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockResponse);
    });

    await store.dispatch(signIn(mockDetails));
    expect(store.getActions()).toEqual([
      {
        type: SIGN_IN,
      }
    ]);
  });

  it("dispatches ERROR type action when login is unsuccesful due to server or network errors", async () => {
    const store = mockStore({
      success: {},
      error: null,
      loading: false,
      user: {}
    });
    const mockDetails = {
      email: "abc@yahoo.com",
      password: "123",
    };

    const mockResponse = {
      status: 500,
      response: {
        data: { status: 'error'}
      }
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockResponse);
    });

    await store.dispatch(signIn(mockDetails));
    expect(store.getActions()).toEqual([
      {
        type: ERROR,
        payload: {
            data: { status: 'error'}
          }
      }
    ]);
  });
});
