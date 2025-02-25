import React from 'react'
import styles from './Sidebar.module.css'
import {Link} from 'react-router-dom'
import add_product from '../../assets/add_product.png'
import list_product from '../../assets/list_product.webp'
export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
            <div className={styles.sidebaritem}>
                <img src={add_product} alt="" />
                <p>Add Product</p>
            </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration:"none"}}>
            <div className={styles.sidebaritem}>
                <img src={list_product} alt="" />
                <p>Product List</p>
            </div>
        </Link>
    </div>
  )
}
