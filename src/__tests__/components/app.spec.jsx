import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import App from '../../components/App';
import mockStore from '../../__mocks__/storeMock';

describe('App', () => {
    let app;
    const store = mockStore({});
    beforeEach(() => {
      app = mount(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );
    });
    it('Should mount without failing', () => {
        expect(app.find('nav').exists()).toEqual(true);
    });
  })