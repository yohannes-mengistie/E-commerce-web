import React, { useContext } from 'react'
import styles from './CartItem.module.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from  '../Assets/remove_icon.png'
export const CartItem = () => {
    const shopContext = useContext(ShopContext)
    if (!shopContext) {
        return null
    }
    const { getTotalCartAmount,products,cartItem, removeFromCart } = shopContext
  return (
    <div className={styles.cartitem}>
        <div className={styles.formatitems}>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {products.map((e) =>{
            if(cartItem[e.id] >0){
                return <div>
                <div className={styles.cartitemformat}>
                    <img className={styles.cartproduct} src={e.image} alt="" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className={styles.quantity}>{cartItem[e.id]}</button>
                    <p>${e.new_price*cartItem[e.id]}</p>
                    <img className={styles.removeicon} src={remove_icon} onClick ={()=>{removeFromCart(e.id)}} alt="" />
    
                </div>
                <hr />
            </div>
            }
            return null;
        })}
        <div className={styles.cartitemsdown}>
            <div className={styles.cartitemtotal}>
                    <h1>cart Totals</h1>
                    <div>
                        <div className={styles.totalitem}>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className={styles.totalitem}>
                                <p>Shipping Free</p>
                                <p>Free</p>
                        </div>
                        <hr />
                        <div className={styles.totalitem} >
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className={styles.promocode}>
                    <p>If you have a promo code, Enter it here</p>
                    <div className={styles.promobox}>
                        <input type="text" placeholder='promo code'/>
                        <button>Submit</button>
                    </div>
            </div>
        </div>
    </div>
  )
}
