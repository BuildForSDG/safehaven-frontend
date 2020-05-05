import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import exampleAction from '../../actions/exampleAction';

import styles from './example.scss';

const Example = () => {
  const dummyText = useSelector((state) => state.example.exampleText);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(exampleAction('example'));
  };
  return (
    <div className={styles.Example}>
      <h1>Hey there! Imma {dummyText} component.</h1>
      <button className={styles.Button} onClick={handleClick} type="button">
        Click
      </button>
    </div>
  );
};

export default Example;
