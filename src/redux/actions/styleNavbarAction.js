import * as actionTypes from './actionTypes';

/**
 * Set custom navbar styles
 * @function styleNavbarAction
 * @param {object} payload - action payload
 * @returns {object} action
 */
const styleNavbarAction = (payload) => ({
  type: actionTypes.SET_NAVBAR_STYLE,
  payload
});

export default styleNavbarAction;
