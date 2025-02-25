import React from 'react'
import styles from './Admin.module.css'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import {Routes,Route} from 'react-router-dom'
import { AddProduct } from '../../Components/AddProduct/AddProduct'
import { ListProduct } from '../../Components/ListProduct/ListProduct'

export const Admin = () => {
  return (
    <div className={styles.admin}>
        <Sidebar />
        <Routes>
          <Route path='/addproduct' element={<AddProduct />}/>
          <Route path='/listproduct' element={<ListProduct />}/>
        </Routes>
    </div>
  )
}
