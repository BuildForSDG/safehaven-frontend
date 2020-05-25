import React from 'react';
import { shallow } from 'enzyme';
import Modal from '@material-ui/core/Modal';

import SignUp from '../../components/Authentication/SignUp';

global.URL.createObjectURL = jest.fn(() => 'test');

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
  useLocation: () => ({
    pathname: '/provider',
  }),
}));

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: () => true,
}));

describe('Signup page', () => {
  let SignUpView;

  beforeEach(() => {
    SignUpView = shallow(<SignUp />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should click certificate upload button and call handleCertificate function', () => {
    const event = { target: { files: ['test', 'tst'] } };
    const btn = SignUpView.find('#certInput');
    btn.simulate('change', event);

    expect(SignUpView.find('#certButton').text()).toEqual('change File');
    expect(SignUpView.find('#certButton').text()).not.toBe('Upload File');
  });

  it('should click id upload button and call handleIdUpload function', () => {
    const event = { target: { files: ['test', 'tst'] } };
    const btn = SignUpView.find('#idInput');
    btn.simulate('change', event);

    expect(SignUpView.find('#idButton').text()).toEqual('change File');
    expect(SignUpView.find('#idButton').text()).not.toBe('Upload File');
  });

  it('it should click modal button and call handleClose', () => {
    const btn = SignUpView.find(Modal);
    btn.simulate('close');
  });
});