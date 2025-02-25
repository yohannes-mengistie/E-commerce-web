import React from 'react'
import styles from './Footer.module.css'
import footer_logo from '../Assets/footer_logo.webp'
import instagram from '../Assets/instagram_icon.webp'
import linkden from '../Assets/linkden.png'
import telegram from '../Assets/telegram.jpg'
export const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footerlogo}>
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className={styles.footerlinks}>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className={styles.footersocial}>
            <div className={styles.socialicons}>
                <img src={instagram} alt="" />
            </div>
            <div className={styles.socialicons}>
                <img src={linkden} alt="" />
            </div>
            <div className={styles.socialicons}>
                <img src={telegram} alt="" />
            </div>
        </div>
        <div className={styles.footerbottom}>
            <hr/>
            <p>Terms & Conditions</p>
            <p>Copyright @ 2025 - All Right Reserved</p>

        </div>
    </div>
  )
}
