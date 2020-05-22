import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import App from '../../components/App';

describe('App', () => {
    let app;
    beforeEach(() => {
      app = mount(
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      );
    });
    it('Should mount without failing', () => {
        expect(app.find('nav').exists()).toEqual(true);
    });
  })