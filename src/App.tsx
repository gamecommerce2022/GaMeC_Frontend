import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FooterApp from './ui/global/footer/footer';
import { Headers } from './ui/global/header/headers';
import Spacer from './ui/home/component/spacer';
import Home from './ui/home/home';
import { Category, ProductPage } from './ui/user/browser/browser';
function App() {
 return (
  <div className="bg-black select-none">
   <Spacer />
   <Headers />
   <Spacer />
   <Routes >
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path='/product-list' element={<Category />} />
    <Route path='/product-list/products/:id' element={<ProductPage />} />
   </Routes >
   <Spacer />
   <FooterApp />
  </div>

 );
}

export default App;