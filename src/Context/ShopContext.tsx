import React, { useState } from 'react'
import all_product from "../Components/Assets/all_product.ts"
interface Product {
    id: number;
    name: string;
    category: string;
    image: string;
    new_price: number;
    old_price: number;
    
}

interface ShopContextType {
    products: Product[];
    cartItem: { [key: number]: number };
    addToCart: (itemId: number) => void;
    removeFromCart: (itemId: number) => void;
    getTotalCartAmount: () => number;
    getTotalCartAmounts: () => number;
}


export const ShopContext = React.createContext<ShopContextType | null>(null);

interface ShopContextProviderProps {
    children: React.ReactNode;
}
function getDefaultCart(){
    let cart: { [key: number]: number } = {};
    for (let index = 0; index<all_product.length+1;index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider: React.FC<ShopContextProviderProps> = (props) => {
    const [cartItem,setCartItem] = useState(getDefaultCart());
    interface CartItem {
        [key: number]: number;
    }

    const addToCart = (itemId: number): void => {
        setCartItem((prev: CartItem) => ({
            ...prev,
            [itemId]: prev[itemId] + 1,
        }));
        

    };

    const removeFromCart = (itemId: number): void => {
        setCartItem((prev: CartItem) => ({
            ...prev,
            [itemId]: prev[itemId] - 1,
        }));
    };

    const getTotalCartAmount =()=>{
        let totalAmount = 0;
        for(const item in cartItem){
            if(cartItem[item] >0){
                let itemInfo = all_product.find((product)=>product.id === Number(item))
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItem[item];
                }
                
            }
            
        }
        return totalAmount;
        
    }
     const getTotalCartAmounts = ()=>{
        let totalItem = 0;
        for(const item in cartItem){
            if (cartItem[item] >0){
                totalItem +=cartItem[item]
            }
        }
        return totalItem;
     }

    const contextValue: ShopContextType = { products:all_product ,cartItem,addToCart,removeFromCart,getTotalCartAmount,getTotalCartAmounts};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;