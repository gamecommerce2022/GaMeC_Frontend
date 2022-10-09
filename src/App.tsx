import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Headers } from './global_pages/header/headers';
import Home from './global_pages/home/home';
import FooterApp from './global_pages/footer/footer';
import Spacer from './global_pages/home/component/spacer';
import { ProductListPage, ProductInfoPage } from './domain_product/page/page';

function App() {
 return (
  <div className="bg-black">
   <Spacer />
   <Headers />
   <Spacer />
   <Routes >
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path='/product-list' element={<ProductListPage />} />
    <Route path='/product/:id' element={<ProductInfoPage />} />
   </Routes >
   <Spacer />
   <FooterApp />
  </div>

 );
}

export default App;