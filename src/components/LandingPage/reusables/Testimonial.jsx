import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import quoteMarkStart from '../../../assets/images/quote-marks-start.png';
import quoteMarkEnd from '../../../assets/images/quote-marks-end.png';
import defaultAvatar from '../../../assets/images/testimonial_default.jpg';

const useStyles = makeStyles(() => ({
  testimonialContainer: {
    margin: 'auto',
    textAlign: 'center'
  },
  testimonial: {
    textAlign: 'center',
    fontSize: '3rem',
    position: 'relative',
    marginBottom: '1rem',
    lineHeight: 1.5,

    '@media (max-width: 768px)': {
      fontSize: '2.5rem'
    },

    '@media (max-width: 632px)': {
      fontSize: '1.8rem',
      lineHeight: 1.25
    }
  },
  quotes: {
    display: 'block',
    position: 'absolute',

    '@media (max-width: 768px)': {
      maxWidth: '10%'
    }
  },
  quotes_1: {
    top: 0,
    left: '15%'
  },
  quotes_2: {
    top: 0,
    right: '15%'
  },
  text: {
    display: 'inline-block',
    width: '40%',
    maxWidth: '60rem',
    textAlign: 'center',
    fontStyle: 'italic',
    margin: 'auto 5rem'
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: '11rem',
    height: '11rem',
    borderRadius: '50%',
    marginRight: '1.6rem',

    '@media (max-width: 768px)': {
      width: '9rem',
      height: '9rem'
    },

    '@media (max-width: 632px)': {
      width: '6rem',
      height: '6rem'
    }
  },
  userName: {
    verticalAlign: 'middle',
    fontSize: '2.5rem',
    textTransform: 'capitalize',
    opacity: 0.9,

    '@media (max-width: 768px)': {
      fontSize: '2rem'
    },

    '@media (max-width: 633px)': {
      fontSize: '1em'
    }
  }
}));

const Testimonial = ({ text, imageLink, userName }) => {
  const classes = useStyles();

  return (
    <div className={classes.testimonialContainer}>
      <div className={classes.testimonial}>
        <img
          src={quoteMarkStart}
          alt=""
          className={`${classes.quotes} ${classes.quotes_1}`}
        />
        <span className={classes.text}>{text}</span>
        <img
          src={quoteMarkEnd}
          alt=""
          className={`${classes.quotes} ${classes.quotes_2}`}
        />
      </div>
      <div className={classes.avatarContainer}>
        <img
          src={imageLink || defaultAvatar}
          alt=""
          className={classes.avatar}
        />
        <span className={classes.userName}>{userName}</span>
      </div>
    </div>
  );
};

Testimonial.defaultProps = {
  imageLink: defaultAvatar
};

Testimonial.propTypes = {
  text: PropTypes.string.isRequired,
  imageLink: PropTypes.string,
  userName: PropTypes.string.isRequired
};

export default Testimonial;
