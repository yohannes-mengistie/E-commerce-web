import React from 'react'
import styles from './Item.module.css'

interface Props {
    image:string,
    name:string,
    new_price:number,
    old_price:number,
    id:number;
}

export const Item = (props:Props) => {
  return (
    <div className={styles.item}>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className={styles.itemprices}>
            <div className={styles.itemnew}>
                $ {props.new_price}
            </div>
            <div className={styles.itemold}>
                $ {props.old_price}
            </div>
        </div>
    </div>
  )
}
