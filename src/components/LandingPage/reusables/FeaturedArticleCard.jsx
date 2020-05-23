import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

import Typography from '../../utils/Typography';

const tagColor = '#037e03';
const bodyColor = '#333';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '33.5rem',
    lineHeight: '1.24',
    marginTop: '6rem',
    marginRight: '1.6rem'
  },
  imageController: {
    maxWidth: '30rem'
  },
  image: {
    width: '100%',
    height: 'auto'
  },
  tag: {
    display: 'inline-block',
    marginTop: '1rem',
    color: tagColor,
    fontSize: '1.8rem'
  },
  title: {
    fontSize: '2.8rem',
    lineHeight: 'inherit',
    marginTop: '1.5rem'
  },
  body: {
    fontWeight: 300,
    fontSize: '1.8rem',
    color: bodyColor,
    paddingTop: '7px'
  },
  footer: {
    display: 'inline-block',
    marginTop: '1rem'
  }
}));

const FeaturedArticleCard = ({ image, tag, title, body, author }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <div className={classes.imageController}>
          <img src={image} alt="" className={classes.image} />
          <span className={classes.tag}>{tag}</span>
        </div>
      </div>
      <Typography variant="h3" className={classes.title}>
        {title}
      </Typography>
      <Typography className={classes.body}>{body}</Typography>
      <span className={classes.footer}>- {author}</span>
    </div>
  );
};

FeaturedArticleCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default FeaturedArticleCard;
