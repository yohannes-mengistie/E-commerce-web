import React from 'react'
import styles from './Hero.module.css'
import arrow from '../Assets/arrow.png'
import handIcon from '../Assets/handIcon.jpg'
import heroImage from '../Assets/heroImage.avif'

export const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.heroleft}>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className={styles.handhand}>
                        <p>new</p>
                        <img src={handIcon} alt=""/>
                </div>
                <p>collection</p>
                <p>for everyone</p>
            </div>
            <div className={styles.herolatestbtn}>
                <div>
                    Latest Collection
                </div>
                <img src={arrow} alt=""/>
            </div>
        </div>
        <div className={styles.heroright}>
            <img src={heroImage} alt ="" />
        </div>
    </div>
  )
}
