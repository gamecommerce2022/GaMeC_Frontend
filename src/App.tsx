import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Blogs } from './ui/Blogs';
import { Collections } from './ui/Collections';
import { Contact } from './ui/Contact';
import Header from './ui/Header/Header';
import { Home } from './ui/Home';
import { Shop } from './ui/Shop';

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