import React from 'react'
import styles from './Offers.module.css'
import exclusive_img from '../Assets/exclusive.jpg'
export const Offers = () => {
  return (
    <div className={styles.offers}>
        <div className={styles.offerleft}>
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>

        <div className={styles.offerright}>
            <img src={exclusive_img} alt="" />
        </div>
    </div>
  )
}
