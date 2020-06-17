import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { func } from 'prop-types';
import { getConsultants } from '../../redux/actions/chatAction';
import styles from './chat.scss';

/**
 * @function Consultants
 * @param {*} props
 * @returns {HTMLElement} default layout
 */
const Consultants = ({ setOtherUser}) => {
  const dispatch = useDispatch();
  const consultants = useSelector(({ chat }) => chat.consultants);


  useEffect(() => {
    dispatch(getConsultants());
  }, []);

  const content = () => {
    if (!consultants[0]) {
      return 'no consultants';
    }

    return consultants.map((consultant, index) => {
      return (
        <div
          role="button"
          tabIndex="0"
          onClick={() => setOtherUser(consultant.uuid)}
          onKeyPress={setOtherUser}
          className={styles.UserTab}
          key={index.toString()}
        >
          {consultant.firstName} {consultant.surName}
        </div>
      );
    });
  };

  return (
    <div>
      <div className={styles.List}>{content()}</div>
    </div>
  );
};

Consultants.propTypes = {
  setOtherUser: func.isRequired
}

export default Consultants;
