import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { func } from 'prop-types';
import { getPatients, patientsLoading } from '../../redux/actions/chatAction';
import styles from './chat.scss';

/**
 * @function Patients
 * @param {*} props
 * @returns {HTMLElement} default layout
 */
const Patients = ({ setOtherUser }) => {
  const patients = useSelector(({ chat }) => chat.patients);
  const loading = useSelector(({ chat }) => chat.patientsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(patientsLoading())
    dispatch(getPatients());
  }, []);

  const content = () => {
    if (loading) {
      return 'Loading...'
    }

    if (!loading && !patients[0]) {
      return 'No patients';
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
};

export default Patients;
