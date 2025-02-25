import React from 'react'
import styles from './Item.module.css'
import { Link } from 'react-router-dom';

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
        <Link to={`/product/${props.id}`}><img onClick={() => window.scrollTo(0,0)} src={props.image} alt="" /></Link>
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
