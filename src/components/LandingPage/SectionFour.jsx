import React from 'react';

import { Button } from '@material-ui/core';
import takeTest from '../../assets/images/s4_1test.svg';
import searchSpecialists from '../../assets/images/s4_2search_specialists.svg';
import bookConsultation from '../../assets/images/s4_3book.svg';
import testimonialImg1 from '../../assets/images/testimonial_1.png';
import SectionCard from './reusables/SectionCard';
import Typography from '../utils/Typography';
import Carousel from '../utils/Carousel';
import styles from './landingPage.scss';
import Testimonial from './reusables/Testimonial';
import useButtonStyles from './styles';

const testimonials = [
  {
    id: 1,
    text:
      'I can actually see progress in my mental health which is something I haven’t been able to say in 15 years and it’s thanks to the docs.',
    imageLink: testimonialImg1,
    userName: 'Ms. Debbie Obiorah'
  },
  {
    id: 2,
    text:
      'I can actually see progress in my mental health which is something I haven’t been able to say in 15 years and it’s thanks to the docs.',
    imageLink: null,
    userName: 'Ms. Rachel Emuh'
  }
];

const SectionFour = () => {
  const buttonClasses = useButtonStyles();

  return (
    <>
      <section className={styles.Section4}>
        <Typography variant="h2" className={styles.Section4__Heading}>
          You deserve mental wellness and happiness too
        </Typography>
        <div className={styles.SectionCardContainer}>
          <SectionCard
            image={takeTest}
            title="Take a test"
            body="Not sure if therapy is right for you? You don’t have to figure it out alone.
          Take our quick assessment to find out if you’d benefit from connecting with professional support."
          />
          <SectionCard
            image={searchSpecialists}
            title="Search Specialists"
            body="Not sure if therapy is right for you? You don’t have to figure it out alone.
          Take our quick assessment to find out if you’d benefit from connecting with professional support."
          />
          <SectionCard
            image={bookConsultation}
            title="Book your Video consultation"
            body="Not sure if therapy is right for you? You don’t have to figure it out alone.
          Take our quick assessment to find out if you’d benefit from connecting with professional support."
          />
        </div>
      </section>
      <section className={styles.Section4_CarouselContainer}>
        <Carousel>
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              text={testimonial.text}
              imageLink={testimonial.imageLink}
              userName={testimonial.userName}
            />
          ))}
        </Carousel>
        <div className={styles.buttonContainer4}>
          <Button variant="outlined" className={buttonClasses.outlinedButton}>
            Get Started Now
          </Button>
        </div>
      </section>
    </>
  );
};

export default SectionFour;
