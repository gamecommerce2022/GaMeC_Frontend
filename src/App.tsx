import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './ui/blogs/blogs';
import Collections from './ui/collections/collections';
import Contact from './ui/contact/contact';
import Header from './ui/header/header';
import Home from './ui/home/home';
import Shop from './ui/shop/shop';

function App() {
 return (
  <>
   <Header />
   <Routes >
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    <Route path='/blogs' element={<Blogs />} />
    <Route path='/collections' element={<Collections />} />
    <Route path='/contact' element={<Contact />} />
   </Routes >
  </>

 );
}

export default App;