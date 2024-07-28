// import React from 'react';
// import { useSelector } from 'react-redux';
// import styles from './HomePage.module.scss';
// import { Link } from 'react-router-dom';

// // Import SVGs as components
// import { ReactComponent as HomeIcon } from '../assets/svg/home.svg';
// import { ReactComponent as SearchIcon } from '../assets/svg/search.svg';
// import { ReactComponent as LogoutIcon } from '../assets/svg/logout.svg';
// import { ReactComponent as ProfileIcon } from '../assets/svg/profile.svg';
// import { ReactComponent as SkilletIcon } from '../assets/svg/skillet-small.svg';
// import { ReactComponent as LineIcon } from '../assets/svg/line.svg';

// const HomePage = () => {
//     const user = useSelector((state) => state.auth.user);

//     function openCategory(evt, category) {
//       // Declare all variables
//       var i, tabcontent, tablinks;
    
//       // Get all elements with class="tabcontent" and hide them
//       tabcontent = document.getElementsByClassName("tabcontent");
//       for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//       }
    
//       // Get all elements with class="tablinks" and remove the class "active"
//       tablinks = document.getElementsByClassName("tablinks");
//       for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//       }
    
//       // Show the current tab, and add an "active" class to the button that opened the tab
//       document.getElementById(category).style.display = "block";
//       evt.currentTarget.className += " active";
//     }
  
//     return (
//       <div className={styles.container}>
//         <div className={styles.container}>
//           <nav>
//             <div className={styles.navbar}>
//               <div className={styles.logo}>
//                 <SkilletIcon alt="Logo" className={styles.logoIcon}/>
//                 <h3>CooksCorner</h3>
//               </div>
//               <div>
//                 <LineIcon className={styles.line} />
//               </div>
//               <ul>
//                 <li className={styles.navItem}>
//                   <Link to="/home">
//                     <HomeIcon className={styles.navIcon}/>
//                   </Link>
//                 </li>
//                 <li className={styles.navItem}>
//                   <Link to="/search">
//                     <SearchIcon className={styles.navIcon} />
//                   </Link>
//                 </li>
//                 <li className={styles.navItem}>
//                   <Link to="/profile">
//                     <ProfileIcon  className={styles.navIcon}/>
//                   </Link>
//                 </li>
//                 <li className={styles.logout}>
//                   <Link to="/logout">
//                     <LogoutIcon  className={styles.navIcon}/>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//           <div className={styles.homepage}>
//             <p>Hello, Aigerim!</p>
//             <div className={styles.recipeGrid}>
//               <p className={styles.categoryText}>Category</p>
//               {/* Tab links */}
//               <div class="tab">
//                 <button class="tablinks" onclick="openCategory(event, 'Breakfast')">Beakfast</button>
//                 <button class="tablinks" onclick="openCategory(event, 'Lunch')">Lunch</button>
//                 <button class="tablinks" onclick="openCategory(event, 'Dinner')">Dinner</button>
//               </div>
//                 {/* Tab content */}
//               <div id="Breakfast" class="tabcontent">
//                 <div className={styles.recipeGrid}></div>
//               </div>

//               <div id="Lunch" class="tabcontent">
//                 <div className={styles.recipeGrid}></div>
//               </div>

//               <div id="Dinner" class="tabcontent">
//                 <div className={styles.recipeGrid}></div>
//               </div>
//             </div>
//           </div>
          
//         </div>
//       </div>
//     );
//   };
  
//   export default HomePage;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';

// Import SVGs as components
import { ReactComponent as HomeIcon } from '../assets/svg/home.svg';
import { ReactComponent as SearchIcon } from '../assets/svg/search.svg';
import { ReactComponent as LogoutIcon } from '../assets/svg/logout.svg';
import { ReactComponent as ProfileIcon } from '../assets/svg/profile.svg';
import { ReactComponent as SkilletIcon } from '../assets/svg/skillet-small.svg';
import { ReactComponent as LineIcon } from '../assets/svg/line.svg';

const HomePage = () => {
    const user = useSelector((state) => state.auth.user);
    const [activeTab, setActiveTab] = useState('Breakfast');

    const openCategory = (category) => {
        setActiveTab(category);
    }

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
                <p>Hello, Aigerim!</p>
                <div className={styles.title}>
                    <p className={styles.categoryText}>Category</p>
                </div>
                <div className={styles.content}>
                  <div className={styles.tab}>
                      {['Breakfast', 'Lunch', 'Dinner'].map((tab) => (
                          <button
                              key={tab}
                              className={`${styles.tablinks} ${activeTab === tab ? styles.active : ''}`}
                              onClick={() => openCategory(tab)}
                          >
                              {tab}
                          </button>
                      ))}
                  </div>
                  <div className={styles.tabcontent}>
                      {activeTab === 'Breakfast' && <div className={styles.recipeGrid}></div>}
                      {activeTab === 'Lunch' && <div className={styles.recipeGrid}></div>}
                      {activeTab === 'Dinner' && <div className={styles.recipeGrid}></div>}
                  </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;