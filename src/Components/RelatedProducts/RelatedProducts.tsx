import React from 'react'
import styles from './RelatedProduct.module.css'
import data_product from '../Assets/data.ts'
import { Item } from '../Item/Item'
export const RelatedProducts = () => {
  return (
    <div className={styles.relatedproduct}>
        <h1>Related Products</h1>
        <hr />
        <div className={styles.relatedproductitem} >
            {data_product.map((product,i) => {
                return <Item key={i} id={product.id} name={product.name} image={product.image} new_price={product.new_price} old_price={product.old_price} />
            })}
        </div>
    </div>
  )
}
