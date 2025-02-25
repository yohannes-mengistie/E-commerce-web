import React, { useEffect, useState } from 'react'
import styles from './ListProduct.module.css'
import product from '../../assets/all_product.ts'
import remove_icon from '../../assets/remove_icon.png'
interface Product {
    name:string;
    id:number
    image: string;
    old_price: number;
    new_price: number;
    category: string;
}

export const ListProduct = () => {
    const [allproduct, setAllProduct] = useState<Product[]>([]);

    const fetchInfo = async ()=>{
        await fetch('http://localhost:4000/allproducts').then((res) =>res.json()).then((data) =>{
            setAllProduct(data)
        });
    }

    useEffect(()=>{
        fetchInfo();
    },[])

    interface RemoveProductResponse {
        success: boolean;
        message: string;
    }

    const removeProduct = async (id: number)=> {
         await fetch('http://localhost:4000/removeproduct', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        });
        await fetchInfo();
    }

  return (
    <div className={styles.listproduct}>
        <h1>ALL PRODUCTS LIST</h1>
        <div className={styles.formatmain}>
            <p>Products</p>
            <p>Title</p>
            <p>Old Price</p>
            <p>New Price</p>
            <p>Category</p>
            <p>Remove</p>
        </div>
        <div className={styles.allproducts}>
            <hr />
            {allproduct.map((product,i) =>{
                return <>
                             <div key={i} className={`${styles.format} ${styles.formatmain}`}>
                    <img src={product.image} alt="" className={styles.productimage} />
                    <p>{product.name}</p>
                    <p>${product.old_price}</p>
                    <p>${product.new_price}</p>
                    <p>{product.category}</p>
                    <img onClick={()=>{removeProduct(product.id)}} className={styles.removeicon} src={remove_icon} alt="" />
                </div>
                <hr />
                </>
                
            })}
        </div>
    </div>
  )
}
