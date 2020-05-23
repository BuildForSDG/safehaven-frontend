import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

import Typography from '../../utils/Typography';

const titleColor = '#037e03';
const bodyColor = '#333';

const useStyles = makeStyles(() => ({
  root: {
    width: '30%',
    minWidth: '18rem',
    lineHeight: '1.24',
    marginTop: '6rem',
    marginRight: '1rem',

    '@media (max-width: 1250px)': {
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  imageContainer: {
    textAlign: 'center',
    maxWidth: '13rem',
    margin: 'auto'
  },
  image: {
    maxWidth: '14rem',
    width: '100%',
    display: 'inline-block'
  },
  title: {
    fontSize: '2.8rem',
    lineHeight: 'inherit',
    color: titleColor,
    marginTop: '1.5rem',

    '@media (max-width: 768px)': {
      fontSize: '2.5rem'
    }
  },
  body: {
    fontWeight: 300,
    fontSize: '1.8rem',
    color: bodyColor,
    paddingTop: '7px',

    '@media (max-width: 768px)': {
      fontSize: '1.4rem',
      paddingTop: '7px'
    }
  }
}));

const SectionCard = ({ image, title, body }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <img src={image} alt="" className={classes.image} />
      </div>
      <Typography variant="h3" className={classes.title}>
        {title}
      </Typography>
      <Typography className={classes.body}>{body}</Typography>
    </div>
  );
};

SectionCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default SectionCard;
