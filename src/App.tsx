import React from 'react';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import { Shop } from './Page/Shop';
import { ShopCatagory } from './Page/ShopCatagory';
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path='/' element={<Shop />} />
         <Route path='/mens' element={<ShopCatagory />} />
         <Route path='/womens' element={<ShopCatagory />} />
         <Route path='/kids' element={<ShopCatagory />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  )};
