import React from 'react';
import { useSelector } from 'react-redux';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
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

  const navbarStyle = useSelector((reduxState) => reduxState.navbarStyle);

  return (
    <nav className={styles.Black} style={navbarStyle}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>    
      <ul>
        <li>About Us</li>
        <li>Consult</li>
        <li>Chat Now</li>
        <li>Providers</li>
      </ul>
      <Link to="login" className={styles.Signin} style={navbarStyle}>
        Login/SignUp
      </Link>

      <React.Fragment key="right">
        <button
          className={styles.NavButton}
          type="button"
          aria-label="menu"
          onClick={toggleDrawer('right', true)}
          style={navbarStyle}
        >
          <MenuIcon style={{ fontSize: 30 }} />
        </button>
        <SwipeableDrawer
          className={styles.Sidenav}
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
              <li><Link to="login">Login/SignUp</Link></li>
            </ul>
          </div>
        </SwipeableDrawer>
      </React.Fragment>
    </nav>
  );
};

export default Navbar;
