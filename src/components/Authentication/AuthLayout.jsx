import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { object as objectprop } from 'prop-types';
import styles from './auth.scss';
import woman from '../../assets/images/woman.svg';

const AuthLayout = ({ children }) => {
  const { pathname } = useLocation();
  const loginclass =
    pathname === '/signup' || pathname === '/provider' ? styles.Inactive : '';
  const signupclass = pathname === '/login' ? styles.Inactive : '';
  return (
    <div className={styles.Container}>
      <aside>
        <img src={woman} alt="woman" />
      </aside>
      <div className={styles.FormContainer}>
        {pathname === '/signup' && (
          <div className={styles.Top}>
            <h3>JOIN SAFEHAVEN</h3>
            <span>
              Are you practitioner?
              <Link to="provider" className={signupclass}>
                Signup here
              </Link>
            </span>
          </div>
        )}
        {pathname === '/provider' && (
          <div className={styles.Top}>
            <h3>JOIN OUR PROVIDERS</h3>
            <span>
              Not a practitioner?
              <Link to="/signup" className={signupclass}>
                Signup here
              </Link>
            </span>
          </div>
        )}
        <div className={styles.Inner}>
          <div className={styles.Links}>
            <Link to="/login" className={loginclass}>
              Login
            </Link>
            <Link to="/signup" className={signupclass}>
              Signup
            </Link>
          </div>

          <div className={styles.FormBody}>{children}</div>
        </div>
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
  children: objectprop.isRequired
};

export default AuthLayout;
