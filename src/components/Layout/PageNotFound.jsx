import React from 'react';
import notfound from '../../assets/images/notfound.svg'
import styles from './layout.scss';


/**
 * @function PageNotFound
 * @param {*} props
 * @returns {HTMLElement} default layout
 */
const PageNotFound = ( ) => (
  <div className={styles.NotFound}>
    <img src={notfound} alt="nolfound"/>
  </div>
);



export default PageNotFound;
