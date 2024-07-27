import React from 'react';
import styles from './SplashScreen.module.scss';
import { ReactComponent as SkilletIcon } from './components/assets/svg/skillet.svg';

const SplashScreen = () => {
  return (
    <div className={styles.splashScreen}>
      <SkilletIcon alt="skillet" />
      <h1>Cooks Corner</h1>
    </div>
  );
};

export default SplashScreen;