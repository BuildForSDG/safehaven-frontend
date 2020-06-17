import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { func } from 'prop-types';
import { getPatients } from '../../redux/actions/chatAction';
import styles from './chat.scss';

/**
 * @function Patients
 * @param {*} props
 * @returns {HTMLElement} default layout
 */
const Patients = ({ setOtherUser}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPatients());
  }, []);
  const patients = useSelector(({ chat }) => chat.patients);

  const content = () => {
    if (!patients[0]) {
      return 'no patients';
    }

    return patients.map((consultant, index) => {
      return (
        <div
          role="button"
          tabIndex="0"
          onClick={() => setOtherUser(consultant.uuid)}
          onKeyPress={() => setOtherUser(consultant.uuid)}
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


Patients.propTypes = {
  setOtherUser: func.isRequired
}

export default Patients;
