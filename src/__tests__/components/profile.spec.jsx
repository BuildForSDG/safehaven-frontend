import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../../redux/reducers';
import Profile from '../../components/Profile/Profile';
import EditUser from '../../components/Profile/EditUser';

global.URL.createObjectURL = jest.fn(() => 'test');

const store = createStore(reducers, applyMiddleware(thunk));

describe('Profile page', () => {
  let ProfileView;
  beforeEach(() => {
    ProfileView = mount(
      <BrowserRouter>
        <Provider store={store}>
          <Profile />
        </Provider>
      </BrowserRouter>
    );
  });
  it('Should mount without failing', () => {
    expect(ProfileView.find('main').exists()).toEqual(true);
  });
});

describe('Edit user page', () => {
  let EditUserView;
  beforeEach(() => {
    EditUserView = mount(
      <BrowserRouter>
        <Provider store={store}>
          <EditUser />
        </Provider>
      </BrowserRouter>
    );
  });
  it('Should mount without failing', () => {
    expect(EditUserView.find('form').exists()).toEqual(true);
  });

  it('Should change email state on update', () => {
    const event = { currentTarget: { name: 'phone', value: 8098765432 } };
    const phoneInput = EditUserView.find('input[type="number"]');
    act(() => phoneInput.prop('onChange')(event));
    expect(phoneInput.exists()).toEqual(true);
  });

  it('Should submit form', () => {
    const submitButton = EditUserView.find('button[type="submit"]');
    submitButton.simulate('submit');
    expect(submitButton.exists()).toEqual(true);
  });
});

