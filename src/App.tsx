import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './ui/blogs/blogs';
import Contact from './ui/contact/contact';
import { Headers } from './ui/header/headers';
import Home from './ui/home/home';
import Wishlist from './ui/wishlist/wishlist';
import Category from './ui/category/category';
import SignIn from './ui/authentication/sign_in';
import FooterApp from './ui/footer/footer';
import Spacer from './ui/home/component/spacer';

function App() {
 return (
  <div>
   <Spacer />
   <Headers />
   <Spacer />
   <Routes >
    <Route path="/" element={<Home />} />
    <Route path="/category" element={<Category />} />
    <Route path='/blogs' element={<Blogs />} />
    <Route path='/wishlist' element={<Wishlist />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/signin' element={<SignIn />} />
   </Routes >
   <Spacer />
   <FooterApp />
  </div>

 );
}

export default App;