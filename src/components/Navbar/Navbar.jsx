import React from 'react';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.NavWrapper}>
      <div className={styles.left}>
        <span>Img</span>
        <span>OrgFlow</span>
      </div>
      <div className={styles.right}>
        <span>Img</span>
        <span>Search</span>
      </div>
    </div>
  )
}

export default Navbar;
