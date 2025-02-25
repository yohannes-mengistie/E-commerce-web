import React from 'react'
import styles from './NewsLetter.module.css'
export const NewsLetter = () => {
  return (
    <div className={styles.newsletter}>
        <h1>Get Exclusive Offers on your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type='email' placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
