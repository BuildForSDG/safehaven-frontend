/** ************************************************
 * Title: Carousel Source Code
 * Author: Learus (https://github.com/Learus)
 * Edited-by: SDG Team-025
 * Date: 2020
 * Code version: N/A
 * Availability: https://github.com/Learus/react-material-ui-carousel/blob/master/src/components/Carousel.js
 ************************************************** */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Fade, Slide, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import navPrevious from '../../assets/images/carousel_ButtonLeft.svg';
import navNext from '../../assets/images/carousel_ButtonRight.svg';

const styles = {
  root: {
    position: 'relative'
  },
  indicators: {
    width: '100%',
    marginTop: '10px',
    textAlign: 'center'
  },
  indicator: {
    fontSize: '15px',
    cursor: 'pointer',
    transition: '200ms',
    color: '#afafaf',

    '&:hover': {
      color: '#1f1f1f'
    },

    '&:active': {
      color: '#1f1f1f'
    }
  },
  active: {
    color: '#494949'
  },
  buttonWrapper: {
    position: 'absolute',
    height: '100px',
    backgroundColor: 'transparent',
    top: 'calc(50% - 70px)',

    '&:hover': {
      '& $button': {
        backgroundColor: 'black',
        filter: 'brightness(120%)',
        opacity: 0.4
      }
    }
  },
  fullHeightHoverWrapper: {
    height: 'calc(100% - 20px - 10px) !important',
    top: '0 !important'
  },
  button: {
    margin: '0 10px',
    position: 'relative',
    top: '30px',
    color: 'white',
    fontSize: '30px',
    transition: '200ms',
    cursor: 'pointer',

    '&:hover': {
      opacity: '0.6 !important'
    }
  },
  fullHeightHoverButton: {
    top: 'calc(50% - 20px) !important'
  },
  buttonVisible: {
    opacity: '0.6'
  },
  buttonHidden: {
    opacity: '0'
  },
  next: {
    right: 0
  },
  prev: {
    left: 0
  },
  largeButtonWrapper: {
    '&:hover': {
      '& $button': {
        backgroundColor: 'transparent',
        opacity: 0.4
      }
    },

    '@media (max-width: 632px)': {
      '& img': {
        width: '2.3rem',
        height: 'auto'
      }
    }
  }
};

class Carousel extends Component {
  constructor(props) {
    super(props);

    const { autoPlay, interval } = this.props;

    this.state = {
      active: 0,
      autoPlay: autoPlay !== undefined ? autoPlay : true,
      interval: interval !== undefined ? interval : 4000
    };

    this.timer = null;
    this.stop = this.stop.bind(this);
    this.start = this.start.bind(this);
    this.reset = this.reset.bind(this);
    this.pressIndicator = this.pressIndicator.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  componentDidMount() {
    this.start();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.autoPlay !== prevState.autoPlay ||
      nextProps.interval !== prevState.interval
    ) {
      return {
        autoPlay: nextProps.autoPlay !== undefined ? nextProps.autoPlay : true,
        interval: nextProps.interval !== undefined ? nextProps.interval : 4000
      };
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.autoPlay !== prevState.autoPlay ||
      prevProps.interval !== prevState.interval
    ) {
      this.reset();
    }
  }

  componentWillUnmount() {
    this.stop();
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  start() {
    const { autoPlay, interval } = this.state;
    if (autoPlay) {
      this.timer = setInterval(this.next, interval);
    }
  }

  reset() {
    this.stop();

    const { autoPlay } = this.state;
    if (autoPlay) {
      this.start();
    }
  }

  pressIndicator(index) {
    this.setState(
      {
        active: index
      },
      this.reset
    );
  }

  next(event) {
    const { active } = this.state;
    const { children } = this.props;
    const next = active + 1 > children.length - 1 ? 0 : active + 1;

    this.setState(
      {
        active: next
      },
      this.reset
    );

    if (event) event.stopPropagation();
  }

  prev(event) {
    const { active } = this.state;
    const { children } = this.props;
    const prev = active - 1 < 0 ? children.length - 1 : active - 1;

    this.setState(
      {
        active: prev
      },
      this.reset
    );

    if (event) event.stopPropagation();
  }

  render() {
    const {
      indicators,
      animation,
      timeout,
      navButtonsAlwaysVisible,
      fullHeightHover,
      className,
      largeButton,
      children
    } = this.props;

    const { active } = this.state;

    const { classes } = this.props;
    const buttonCssClassValue = `${classes.button} ${
      navButtonsAlwaysVisible ? classes.buttonVisible : classes.buttonHidden
    } ${fullHeightHover ? classes.fullHeightHoverButton : ''}`;
    const buttonWrapperCssClassValue = `${classes.buttonWrapper} ${
      fullHeightHover ? classes.fullHeightHoverWrapper : ''
    } ${largeButton ? classes.largeButtonWrapper : ''}`;

    const navigatePreviousIcon = largeButton ? (
      <img src={navPrevious} alt="" />
    ) : (
      <NavigateBeforeIcon />
    );
    const navigateNextIcon = largeButton ? (
      <img src={navNext} alt="" />
    ) : (
      <NavigateNextIcon />
    );

    return (
      <div
        className={`${classes.root} ${className || ''}`}
        onMouseEnter={this.stop}
        onMouseOut={this.reset}
        onBlur={this.reset}
      >
        {Array.isArray(children) ? (
          children.map((child, index) => {
            return (
              <CarouselItem
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                active={index === active}
                child={child}
                animation={animation}
                timeout={timeout}
              />
            );
          })
        ) : (
          <CarouselItem
            key={0}
            active
            child={children}
            animation={animation}
            timeout={timeout}
          />
        )}

        <div className={`${buttonWrapperCssClassValue} ${classes.next}`}>
          <IconButton
            className={`${buttonCssClassValue} ${classes.next}`}
            onClick={this.next}
          >
            {navigateNextIcon}
          </IconButton>
        </div>

        <div className={`${buttonWrapperCssClassValue} ${classes.prev}`}>
          <IconButton
            className={`${buttonCssClassValue}  ${classes.prev}`}
            onClick={this.prev}
          >
            {navigatePreviousIcon}
          </IconButton>
        </div>

        {indicators ? (
          <Indicators
            classes={classes}
            length={children.length}
            active={active}
            press={this.pressIndicator}
          />
        ) : null}
      </div>
    );
  }
}

function CarouselItem({ active, child, animation, timeout }) {
  return (
    <div className="CarouselItem" hidden={!active}>
      {animation === 'slide' ? (
        <Slide direction="left" in={active} timeout={timeout}>
          <div>{child}</div>
        </Slide>
      ) : (
        <Fade in={active} timeout={timeout}>
          <div>{child}</div>
        </Fade>
      )}
    </div>
  );
}

CarouselItem.propTypes = {
  active: PropTypes.bool.isRequired,
  child: PropTypes.node.isRequired,
  animation: PropTypes.string.isRequired,
  timeout: PropTypes.number.isRequired
};

function Indicators({ classes, press, active, length }) {
  const indicators = [];
  for (let i = 0; i < length; i += 1) {
    const className =
      i === active
        ? `${classes.indicator} ${classes.active}`
        : `${classes.indicator}`;
    const item = (
      <FiberManualRecordIcon
        key={i}
        size="small"
        className={className}
        onClick={() => {
          press(i);
        }}
      />
    );

    indicators.push(item);
  }

  return <div className={`${classes.indicators}`}>{indicators}</div>;
}

Indicators.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  press: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired
};

Carousel.defaultProps = {
  autoPlay: true,
  interval: 5000,
  indicators: false,
  animation: 'slide',
  timeout: 700,
  navButtonsAlwaysVisible: true,
  fullHeightHover: true,
  className: '',
  classes: {},
  largeButton: true
};

Carousel.propTypes = {
  autoPlay: PropTypes.bool,
  interval: PropTypes.number,
  indicators: PropTypes.bool,
  animation: PropTypes.oneOf(['fade', 'slide']),
  timeout: PropTypes.number,
  navButtonsAlwaysVisible: PropTypes.bool,
  fullHeightHover: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  classes: PropTypes.objectOf(PropTypes.any),
  largeButton: PropTypes.bool
};

export default withStyles(styles)(Carousel);
