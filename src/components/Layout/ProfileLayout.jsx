import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ForumIcon from '@material-ui/icons/Forum';
import { node } from 'prop-types';
import styles from './layout.scss';
import smallLogo from '../../assets/images/smallLogo.png';

/**
 * @function DefaultLayout
 * @param {*} props
 * @returns {HTMLElement} default layout
 */
const ProfileLayout = ({ children }) => (
  <div>
    <div className={styles.ProfileNav}>
      <ul>
        <li>
          <img src={smallLogo} alt="" />
        </li>
        <li>
          <NavLink activeStyle={{ background: '#007C0C' }} to="/profile">
            <PersonOutlineIcon fontSize="large" /> <span>Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ background: '#007C0C' }} to="/chat">
            <ForumIcon fontSize="large" /> <span>Chat</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <HomeIcon fontSize="large" /> <span>Home</span>
          </NavLink>
        </li>
      </ul>
    </div>
    {children}
  </div>
);

ProfileLayout.propTypes = {
  children: node.isRequired
};

export default ProfileLayout;
