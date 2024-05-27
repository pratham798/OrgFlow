import React from 'react';

import OrgIcon from './../../assets/organization.svg';
import SearchIcon from './../../assets/search.svg';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.NavWrapper}>
      <div className={styles.left}>
        <img className={styles.navLogo} src={OrgIcon} alt='logo'/>
        <span>OrgFlow</span>
      </div>
      <div className={styles.right}>
        <img className={styles.navLogo} src={SearchIcon} alt='search'/>
        <span>Search</span>
      </div>
    </div>
  )
}

export default Navbar;
