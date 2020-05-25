import React from 'react';
import Button from '@material-ui/core/Button';

import articlePhoto1 from '../../assets/images/s5_1focused-biologist.png';
import Typography from '../utils/Typography';
import FeaturedArticleCard from './reusables/FeaturedArticleCard';

import useButtonStyles from './styles';
import styles from './landingPage.scss';

const featuredArticles = [
  {
    id: 1,
    image: articlePhoto1,
    title: 'A Lesson From History',
    body:
      'The history of human responses to epidemics carries various lessons for our current situation. Two of the more disheartening ones are that',
    tag: 'Covid-19',
    author: 'Dr Bridget Babatope'
  },
  {
    id: 2,
    image: articlePhoto1,
    title: 'A Lesson From History',
    body:
      'The history of human responses to epidemics carries various lessons for our current situation. Two of the more disheartening ones are that',
    tag: 'Covid-19',
    author: 'Rhoda Salami'
  }
];

const SectionFive = () => {
  const buttonClasses = useButtonStyles();

  return (
    <section className={styles.Section5}>
      <div className={styles.textContainer}>
        <Typography variant="h2" className={styles.Section2__Heading}>
          Read top articles from health experts
        </Typography>
        <Typography className={styles.Section2__text}>
          Health articles that keep you informed about good health practices and
          achieve your goals.
        </Typography>
        <div className={styles.buttonContainer5}>
          <Button className={buttonClasses.defaultButton}>
            See all articles
          </Button>
        </div>
      </div>
      <div className={styles.FeaturedArticleContainer}>
        {featuredArticles.map((article) => (
          <FeaturedArticleCard
            key={article.id}
            image={article.image}
            title={article.title}
            body={article.body}
            tag={article.tag}
            author={article.author}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionFive;
