import React from 'react';
import Button from '@material-ui/core/Button';

import Typography from '../utils/Typography';
import anxiety from '../../assets/images/s3_1anxiety.svg';
import depression from '../../assets/images/s3_2depression.svg';
import ptsd from '../../assets/images/s3_3ptsd.svg';
import trauma from '../../assets/images/s3_4trauma.svg';
import relationships from '../../assets/images/s3_5relationships.svg';

import styles from './landingPage.scss';
import useButtonStyles from './styles';

const SectionThree = () => {
  const buttonClasses = useButtonStyles();

  return (
    <section className={styles.Section3}>
      <div className={styles.Section3_headingWrapper}>
        <div>
          <Typography variant="h3" className={styles.Section3__Heading}>
            Make Appointment with specialists for your health concern
          </Typography>
          <Typography className={styles.Section3__body}>
            Private online consultations with verified doctors in all
            specialists
          </Typography>
        </div>
        <div className={styles.buttonContainer3}>
          <Button variant="outlined" className={buttonClasses.outlinedButton}>
            View All specialties
          </Button>
        </div>
      </div>
      <div className={styles.Section3_appointments}>
        <div className={styles.Section3_appointments__item}>
          <img src={anxiety} alt="" />
          <span>Anxiety & Stress</span>
        </div>
        <div className={styles.Section3_appointments__item}>
          <img src={depression} alt="" />
          <span>Depression or Loss</span>
        </div>
        <div className={styles.Section3_appointments__item}>
          <img src={ptsd} alt="" />
          <span>PTSD or Bipolar Disorder</span>
        </div>
        <div className={styles.Section3_appointments__item}>
          <img src={trauma} alt="" />
          <span>Trauma or Addiction</span>
        </div>
        <div className={styles.Section3_appointments__item}>
          <img src={relationships} alt="" />
          <span>Relationships </span>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
