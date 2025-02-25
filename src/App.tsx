import React from 'react';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import { Shop } from './Page/Shop';
import { ShopCatagory } from './Page/ShopCatagory';
import { Product } from './Page/Product';
import { Cart } from './Page/Cart';
import { LoginSignUp } from './Page/LoginSignUp';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/men_banner.jpg'
import women_banner from './Components/Assets/women_banner.jpg'
import kids from './Components/Assets/kids.jpg'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path='/' element={<Shop />} />
         <Route path="/.mens" element={<ShopCatagory banner={men_banner}  category ="men" />} />
         <Route path='/women' element={<ShopCatagory banner={women_banner}  category ="women" />} />
         <Route path='/kid' element={<ShopCatagory banner={kids} category ="kid" />} />
         <Route path="/product" element ={<Product/>}>
              <Route path='/product:productId' element={<Product />}/>
         </Route>
         <Route path='/cart' element={<Cart />} />
         <Route path='/login' element={<LoginSignUp />} />  
      </Routes>
      <Footer />
      </BrowserRouter>
      
    </div>
  )};
