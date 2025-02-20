import React from 'react';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import { Shop } from './Page/Shop';
import { ShopCatagory } from './Page/ShopCatagory';
import { Product } from './Page/Product';
import { Cart } from './Page/Cart';
import { LoginSignUp } from './Page/LoginSignUp';
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path='/' element={<Shop />} />
         <Route path='/mens' element={<ShopCatagory category ="mens" />} />
         <Route path='/womens' element={<ShopCatagory  category ="women" />} />
         <Route path='/kids' element={<ShopCatagory category ="kid" />} />
         <Route path="/product" element ={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
         </Route>
         <Route path='/cart' element={<Cart />} />
         <Route path='/login' element={<LoginSignUp />} />  
      </Routes>
      </BrowserRouter>
      
    </div>
  )};
