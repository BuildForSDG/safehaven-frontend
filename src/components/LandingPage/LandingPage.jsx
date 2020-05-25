import React from 'react';
import { useDispatch } from 'react-redux';

import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';

import styleNavbarAction from '../../redux/actions/styleNavbarAction';
import backgroundProtrait from '../../assets/images/landing_page_background_portrait.png';

import styles from './landingPage.scss';

const navbarStyle = {
  transparent: { backgroundColor: 'transparent' },
  initial: { backgroundColor: null }
};

const LandingPage = () => {
  const dispactch = useDispatch();

  React.useEffect(() => {
    dispactch(styleNavbarAction(navbarStyle.transparent));

    return function cleanup() {
      dispactch(styleNavbarAction(navbarStyle.initial));
    };
  });

  return (
    <main className={styles.LandingPage}>
      <div
        className={styles.mainBackground}
        style={{ backgroundImage: `url(${backgroundProtrait})` }}
      />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </main>
  );
};

export default LandingPage;
