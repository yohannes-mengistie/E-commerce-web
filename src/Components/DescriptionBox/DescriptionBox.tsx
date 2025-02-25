import React from 'react'
import styles from './DescriptionBox.module.css'

export const DescriptionBox = () => {
  return (
    <div className={styles.descriptionbox}>
        <div className={styles.descriptionnavigator}>
            <div className={styles.descriptionnavbox}>
                    Description
            </div>
            <div className={styles.descriptionnavbox}>
                    Reviews (122)
            </div>
        </div>
        <div className={styles.description}>
            <p>An e-commerce website is an online platform that facilitate</p>
            <p>E-commerce website typically display products on for the online view</p>
        </div>
    </div>
  )
}
