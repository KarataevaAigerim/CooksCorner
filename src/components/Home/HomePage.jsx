import React from 'react';
import { useSelector } from 'react-redux';
import styles from './HomePage.module.scss';

const HomePage = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className={styles.container}>
      <h1>Hello {user.name}</h1>
      <div className={styles.recipeGrid}>
      </div>
    </div>
  );
};

export default HomePage;