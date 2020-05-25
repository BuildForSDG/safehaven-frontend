import React from 'react';
import Button from '@material-ui/core/Button';

import Typography from '../utils/Typography';
import SearchInput from '../utils/SearchInput';

import useButtonStyles from './styles';
import styles from './landingPage.scss';

const SectionOne = () => {
  const buttonClasses = useButtonStyles();
  return (
    <section className={styles.Section1}>
      <div className={styles.searchContainer}>
        <SearchInput placeHolder="Search for psychiatists, therapist  and other specialists" />
      </div>
      <div className={styles.headerContainer}>
        <Typography variant="h1" className={styles.Section1__Heading}>
          Are you in Search?
        </Typography>
        <Typography className={styles.headerText}>
          Feeling stress, anxiety or panic attack during this pandemic
          emergency?
        </Typography>
        <div className={styles.buttonContainer1}>
          <Button variant="contained" className={buttonClasses.defaultButton}>
            Chat Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
