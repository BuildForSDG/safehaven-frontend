import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ChevronRight from '@material-ui/icons/ChevronRight';

import specialists1 from '../../assets/images/specialists1.svg';
import specialists2 from '../../assets/images/specialists2.svg';
import specialists3 from '../../assets/images/specialists3.svg';
import SectionCard from './reusables/SectionCard';
import Typography from '../utils/Typography';
import styles from './landingPage.scss';
import useButtonStyles from './styles';

const useStyles = makeStyles(() => ({
  ChevronRight: {
    height: '100%',
    pointerEvents: 'none',
    verticalAligin: 'middle',
    fontSize: '3rem',
    fontWeight: '600',
    marginLeft: '5px'
  }
}));

const SectionTwo = () => {
  const classes = useStyles();
  const buttunClasses = useButtonStyles();

  return (
    <section className={styles.Section2}>
      <Typography variant="h2" className={styles.Section2__Heading}>
        You deserve mental wellness and happiness too
      </Typography>
      <Typography className={styles.Section2__text}>
        Safe haven’s mental health practice isn’t confined to business hours,
        Monday through Friday. You can choose from a variety of therapists,
        psychologist and specialists with different backgrounds and specialties,
        available when you are. From talk therapy to medication management,
        we’re here to support your full mental wellness.
      </Typography>
      <div className={styles.SectionCardContainer}>
        <SectionCard
          image={specialists1}
          title="Certified Specialists"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt"
        />
        <SectionCard
          image={specialists2}
          title="Unlimited Options"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt"
        />
        <SectionCard
          image={specialists3}
          title="Certified Specialists"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt"
        />
      </div>
      <div className={styles.buttonContainer2}>
        <Button
          variant="contained"
          className={buttunClasses.defaultButton}
          style={{ fontWeight: 600 }}
        >
          Free Mental Assessment{' '}
          <ChevronRight className={classes.ChevronRight} />
        </Button>
      </div>
    </section>
  );
};

export default SectionTwo;
