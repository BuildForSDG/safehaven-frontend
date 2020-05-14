import React from 'react';
import { object as objectprop } from 'prop-types';

// Import components
import Nav from './Navbar';
import Footer from './Footer';

/**
 * @function DefaultLayout
 * @param {*} props
 * @returns {HTMLElement} default layout
 */
const DefaultLayout = ({ children }) => (
  <div>
    <Nav />
    {children}
    <Footer />
  </div>
);

DefaultLayout.propTypes = {
  children: objectprop.isRequired,
};

export default DefaultLayout;