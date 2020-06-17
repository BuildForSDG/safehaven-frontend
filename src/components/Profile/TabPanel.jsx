import React from 'react';
import {string, node} from 'prop-types';
import styles from './profile.scss';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    >
      {value === index && (
        <div className={styles.inner}>
          {children}
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: node.isRequired,
  value: string.isRequired,
  index: string.isRequired
}

export default TabPanel;
