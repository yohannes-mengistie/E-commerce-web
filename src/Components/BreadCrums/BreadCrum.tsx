import React from 'react'
import styles from './BreadCrum.module.css'
import arrow_icon from '../Assets/arrow.png'
import all_product from '../Assets/all_product.ts'
interface Props {
    product: {
        id: number;
        name: string;
        category: string;
        image: string;
        new_price: number;
        old_price: number;
    };
}
export const BreadCrum = (props:Props) => {
    const {product} = props;
    console.log(product)
  return (
    <div className={styles.breadcrum}>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )}