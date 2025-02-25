import React from 'react'
import logo from  '../../assets/logo.jpg'
import profile from '../../assets/profile.jpg'
import styles from './Navbar.module.css'
export const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.nav}>
        <img src={logo} alt="" className={styles.navlogo} />
        <div className={styles.brand}>
          <h1>SHOPPER</h1>
          <p className={styles.admin}>Admin Panel</p>
        </div>
        </div>
        
        <img src={profile} alt="" className={styles.navprofile} />
    </div>
  )
}
