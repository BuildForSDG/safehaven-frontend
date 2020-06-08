import React from 'react';
import {string} from 'prop-types';

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
        <p>
          {children}
        </p>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: string.isRequired,
  value: string.isRequired,
  index: string.isRequired
}

export default TabPanel;
