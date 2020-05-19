import React from 'react';
import { object as objectprop } from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './auth.scss';
import woman from '../../assets/images/woman.svg';


const AuthLayout = ({ children }) => (
    <div className={styles.Container}>
        <aside>
           <img src={woman} alt="woman"/> 
        </aside>
        
        <div className={styles.FormContainer}>
            <div className={styles.Links}>
                <Link to="/login" className={styles.Inactive}>Login</Link>
                <Link to="/signup">Signup</Link>   
            </div>

            <div className={styles.FormBody}>{children}</div>
        </div>
    </div>
  );
  
  AuthLayout.propTypes = {
    children: objectprop.isRequired,
  };

export default AuthLayout;
