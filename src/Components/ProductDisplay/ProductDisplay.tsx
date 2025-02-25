import React, { useContext } from 'react'
import styles from './ProductDisplay.module.css'
import star_icon from '../Assets/star_icon.webp'
import star_dull from '../Assets/star_dull.png'
import { ShopContext } from '../../Context/ShopContext';
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
export const ProductDisplay = ({product}:Props) => {
    const { addToCart } = useContext(ShopContext) || {};
  return (
    <div className={styles.productdisplay}>
        <div className={styles.productleft}>
            <div className={styles.leftimglist}>
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className={styles.displayimg}>
                <img  className={styles.mainimg} src={product.image} alt="" />
            </div>
        </div>
        <div className={styles.productright}>
            <h1>{product.name}</h1>
            <div className={styles.rightstar}>
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull} alt="" />
                <p>(122)</p>
            </div>
            <div className={styles.rightprices}>
                 <div className={styles.priceold}>
                        ${product.old_price}
                 </div>
                 <div className={styles.pricenew}>
                        ${product.new_price}
                 </div>
            </div>
            <div className={styles.description}>
                static description of the product
            </div>
            <div  className={styles.productsize}>
                <h1>Select Size</h1>
                <div className={styles.productsizes}>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={() => {addToCart && addToCart(product.id) ,window.scrollTo(0,0)}}>ADD TO CART</button>
            <p className={styles.rightcategory}><span>Category :</span>Women , T-Shirt , Crop Top</p>
            <p className={styles.rightcategory}><span>Tags :</span>Modern, Latest</p>
        </div>
    </div>
 
  )}