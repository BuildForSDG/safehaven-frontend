import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../../redux/reducers';
import PageNotFound from '../../components/Layout/PageNotFound';

const store = createStore(reducers, applyMiddleware(thunk));

describe('Not found page', () => {
  it('Should mount without failing', () => {
    const PageNotFoundView = mount(
      <BrowserRouter>
        <Provider store={store}>
          <PageNotFound />
        </Provider>
      </BrowserRouter>
    );
    expect(PageNotFoundView.find('img').exists()).toEqual(true);
  });
});
