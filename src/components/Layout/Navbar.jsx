import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../assets/images/logo.svg';
import styles from './layout.scss';

const Navbar = () => {
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <nav className={styles.Black}>
      <img src={logo} alt="logo" />
      <ul>
        <li>About Us</li>
        <li>Specialists</li>
        <li>Chat Now</li>
        <li>Providers</li>
      </ul>
      <button type="button">Login/SignUp</button>

      <React.Fragment key="right">
        <button
          className={styles.NavButton}
          type="button"
          aria-label="menu"
          onClick={toggleDrawer('right', true)}
        >
          <MenuIcon style={{ fontSize: 30 }} />
        </button>
        <SwipeableDrawer
          containerClassName={styles.Sidenav}
          anchor="right"
          open={state.right}
          onClose={toggleDrawer('right', false)}
          onOpen={toggleDrawer('right', true)}
        >
          <div className={`${styles.Black} ${styles.SidenavContent}`}>
            <button
              className={`${styles.NavButton} ${styles.Close}`}
              type="button"
              aria-label="menu"
              onClick={toggleDrawer('right', false)}
            >
              <CloseIcon style={{ fontSize: 40 }} />
            </button>
            <ul className>
              <li>About Us</li>
              <li>Specialists</li>
              <li>Chat Now</li>
              <li>Providers</li>
              <li>Login/SignUp</li>
            </ul>
          </div>
        </SwipeableDrawer>
      </React.Fragment>
    </nav>
  );
};

export default Navbar;
