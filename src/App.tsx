import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './ui/blogs/blogs';
import Contact from './ui/contact/contact';
import Footer from './ui/footer/footer';
import Header from './ui/header/header';
import Home from './ui/home/home';
import Shop from './ui/shop/shop';
import Wishlist from './ui/wishlist/wishlist';

function App() {
 return (
  <>
   <Header />
   <Routes >
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    <Route path='/blogs' element={<Blogs />} />
    <Route path='/wishlist' element={<Wishlist />} />
    <Route path='/contact' element={<Contact />} />
   </Routes >
   <Footer />
  </>

 );
}

export default App;