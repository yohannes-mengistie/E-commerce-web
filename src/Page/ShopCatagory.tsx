import React from 'react'
import styles from './CSS/shopCategory.module.css'
import { ShopContext } from '../Context/ShopContext'
import dropDown from '../Components/Assets/dropDown_icon.png'
import all_product from '../Components/Assets/all_product.ts'
import {Item} from "../Components/Item/Item.tsx"
interface Props {
  category: string,
  banner: string
}

export const ShopCatagory = (props:Props) => {
  
  return (
    <div className={styles.category} >
      <img className={styles.categorybanner} src={props.banner} alt="" />
      <div className={styles.indexsort}>
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className={styles.sort}>
              Sort by <img  src={dropDown} alt="" />
          </div>
      </div>
      <div className={styles.shopcatagoryproduct}>
                  {all_product.map((item,i) =>{
                     if(props.category === item.category){
                      return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                     }else{
                      return null;
                     }
                  })}
      </div>
      <div className={styles.loadmore}>
                  Explore More
      </div>
    </div>
  )
}
