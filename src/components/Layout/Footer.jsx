import React from 'react';
import logo from '../../assets/images/logo.svg';
import instagram from '../../assets/images/instagram.svg';
import facebook from '../../assets/images/facebook.svg';
import twitter from '../../assets/images/twitter.svg';
import styles from './layout.scss';

const Footer = () => {
  return (
    <footer className={styles.Black}>
      <div className={styles.Socials}>
        <span>
          <img src={logo} alt="logo" />
        </span>

        <span className={styles.Images}>
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
        </span>
      </div>
      <div>
        <h3>Safe Haven</h3>
        <ul>
          <li>About Us</li>
          <li>Blog</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <h3>Patients</h3>
        <ul>
          <li>Unlimited Consultation</li>
          <li>Join Now</li>
          <li>Depresion Test</li>
          <li>Anxiety Test</li>
        </ul>
      </div>
      <div>
        <h3>Providers</h3>
        <ul>
          <li>Join Us</li>
          <li>Take a survey</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
