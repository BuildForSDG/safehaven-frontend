import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { IconButton } from '@material-ui/core';
import reducers from '../../redux/reducers';

import SignIn from '../../components/Authentication/SignIn';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import AuthLayout from '../../components/Authentication/AuthLayout';
import SignUp from '../../components/Authentication/SignUp';

const store = createStore(reducers, applyMiddleware(thunk));

describe('Signin page', () => {
  let SignInView;
  beforeEach(() => {
    SignInView = mount(
      <BrowserRouter>
        <Provider store={store}>
          <DefaultLayout>
            <AuthLayout>
              <SignIn/>
            </AuthLayout>
          </DefaultLayout>
        </Provider>
      </BrowserRouter>
    );
  });
  it('Should mount without failing', () => {
    expect(SignInView.find('form').exists()).toEqual(true);
  });
  it('Should change email state on update', () => {
    const event = { currentTarget: { name: 'email', value: 'mitch@gmail.com' } };
    const emailInput = SignInView.find('input[type="email"]');
    act(() => emailInput.prop('onChange')(event));
    expect(emailInput.exists()).toEqual(true);
  });

  it('Should submit form', () => {
    const submitButton = SignInView.find('button[type="submit"]');
    submitButton.simulate('submit');
    expect(submitButton.exists()).toEqual(true);
  });

  it('Should show password', () => {
    const passwordIconButton = SignInView.find(IconButton);
    passwordIconButton.simulate('click');
    passwordIconButton.simulate('mousedown');
    expect(passwordIconButton.exists()).toEqual(true);
  });
});

describe('Signup page', () => {
  let SignUpView;
  beforeEach(() => {
    SignUpView = mount(
      <BrowserRouter>
        <Provider store={store}>
          <DefaultLayout>
            <AuthLayout>
              <SignUp/>
            </AuthLayout>
          </DefaultLayout>
        </Provider>
      </BrowserRouter>
    );
  });

  it('Should mount without failing', () => {
    expect(SignUpView.find('form').exists()).toEqual(true);
  });

  it('Should change email state on update', () => {
    const event = { currentTarget: { name: 'email', value: 'mitch@gmail.com' } };
    const emailInput = SignUpView.find('input[type="email"]');
    act(() => emailInput.prop('onChange')(event));
    expect(emailInput.exists()).toEqual(true);
  });

  it('Should submit form', () => {
    const submitButton = SignUpView.find('button[type="submit"]');
    submitButton.simulate('submit');
    expect(submitButton.exists()).toEqual(true);
  });

  it('Should show password', () => {
    const passwordIconButton = SignUpView.find(IconButton);
    passwordIconButton.simulate('click');
    passwordIconButton.simulate('mousedown');
    expect(passwordIconButton.exists()).toEqual(true);
  });
});
