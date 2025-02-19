import React from 'react'
import styles from './Navbar.module.css'
import shopping from '../Assets/shopping.png'
import logo from '../Assets/logo.jpg'

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.navlogo}>
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </div>
        <ul className={styles.navmenu}>
          <li>Shop <hr/></li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
        </ul>

        <div className={styles.navlogincart}>
            <button>Login</button>
            <img src={shopping} alt="" />
        </div>

        
        
    </div>
  )
}
