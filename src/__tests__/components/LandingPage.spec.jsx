import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { IconButton } from '@material-ui/core';

import DefaultLayout from '../../components/Layout/DefaultLayout';
import LandingPage from '../../components/LandingPage/LandingPage';
import Carousel from '../../components/utils/Carousel';

import reducers from '../../redux/reducers';

const store = createStore(reducers);

describe('LandingPage Component', () => {
  let LandingPageView;
  beforeEach(() => {
    LandingPageView = mount(
      <Provider store={store}>
        <BrowserRouter>
          <DefaultLayout>
            <LandingPage />
          </DefaultLayout>
        </BrowserRouter>
      </Provider>
    );
  });

  it('Should mount without failing', () => {
    expect(LandingPageView.find('section').exists()).toEqual(true);
  });

  it('should set Navbar background to transparent on mount', () => {
    const navNode = LandingPageView.find('nav').get(0);
    expect(navNode.props.style).toHaveProperty(
      'backgroundColor',
      'transparent'
    );
  });

  it('should unset Navbar background to initial on unmount', () => {
    LandingPageView.unmount();
    const state = store.getState();
    expect(state.navbarStyle).toHaveProperty('backgroundColor', null);
  });
});

describe('Carousel Component', () => {
  let CarouselView;
  const items = ['item1', 'item2', 'item3'];

  it('should make transitions when navigation buttons are clicked', () => {
    CarouselView = mount(
      <Carousel>
        {items.map((item) => (
          <div key={item} id={item} />
        ))}
      </Carousel>
    );
    const iconBtnNext = CarouselView.find(IconButton).first();
    const iconBtnPrev = CarouselView.find(IconButton).last();

    const carouselItemNode1 = CarouselView.find('#item1').get(0);
    const carouselItemNode2 = CarouselView.find('#item2').get(0);

    iconBtnNext.simulate('click');
    iconBtnPrev.simulate('click');

    expect(carouselItemNode1.key).toEqual(items[0]);
    expect(carouselItemNode2.key).toEqual(items[1]);
  });

  it('should cover branches with undefined props', () => {
    CarouselView = mount(
      <Carousel
        autoPlay={undefined}
        interval={undefined}
        navButtonsAlwaysVisible={false}
        fullHeightHover={false}
        largeButton={false}
        indicators
      >
        {items.map((item) => (
          <div key={item} id={item} />
        ))}
      </Carousel>
    );

    const iconBtnNext = CarouselView.find(IconButton);
    expect(iconBtnNext.exists()).toBeTruthy();
  });
});
