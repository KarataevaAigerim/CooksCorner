import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';
import { fetchRecipesByCategory } from '../../api/recipes';  // Adjust the path as needed

// Import SVGs as components
import { ReactComponent as HomeIcon } from '../assets/svg/home.svg';
import { ReactComponent as SearchIcon } from '../assets/svg/search.svg';
import { ReactComponent as LogoutIcon } from '../assets/svg/logout.svg';
import { ReactComponent as ProfileIcon } from '../assets/svg/profile.svg';
import { ReactComponent as SkilletIcon } from '../assets/svg/skillet-small.svg';
import { ReactComponent as LineIcon } from '../assets/svg/line.svg';

const HomePage = () => {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);  
  const [activeTab, setActiveTab] = useState('Breakfast');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
      if (token) {
          fetchRecipesByCategory(activeTab, token)
              .then(response => setRecipes(response.data))
              .catch(error => console.error('Failed to fetch recipes', error));
      } else {
          console.error('Authentication token is missing');
      }
  }, [activeTab, token]);

    return (
        <div className={styles.container}>
            <nav>
              <div className={styles.navbar}>
                <div className={styles.logo}>
                    <SkilletIcon alt="Logo" className={styles.logoIcon}/>
                    <h3>CooksCorner</h3>
                </div>
                <div>
                    <LineIcon className={styles.line} />
                </div>
                <ul>
                    <li className={styles.navItem}>
                        <Link to="/home">
                            <HomeIcon className={styles.navIcon}/>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/search">
                            <SearchIcon className={styles.navIcon} />
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/profile">
                            <ProfileIcon className={styles.navIcon}/>
                        </Link>
                    </li>
                    <li className={styles.logout}>
                        <Link to="/logout">
                            <LogoutIcon className={styles.navIcon}/>
                        </Link>
                    </li>
                  </ul>
              </div>
            </nav>
            <div className={styles.homepage}>
                <p>Hello, !</p>
                <div className={styles.title}>
                    <p className={styles.categoryText}>Category</p>
                    <div className={styles.content}>
                      <div className={styles.tab}>
                          {['Breakfast', 'Lunch', 'Dinner'].map((tab) => (
                              <button
                                  key={tab}
                                  className={`${styles.tablinks} ${activeTab === tab ? styles.active : ''}`}
                                  onClick={() => setActiveTab(tab)}
                              >
                                  {tab}
                              </button>
                          ))}
                      </div>
                      <div className={styles.tabcontent}>
                          {recipes.map(recipe => (
                              <div key={recipe.id} className={styles.recipeCard}>
                                  <img src={recipe.image} alt={recipe.title} />
                                  <h3>{recipe.title}</h3>
                                  <p>{recipe.description}</p>
                              </div>
                          ))}
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;