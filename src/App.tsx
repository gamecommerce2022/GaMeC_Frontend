import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Admin } from "./ui/admin/admin";
import LoginForm from "./ui/authentication/login/login";
import FooterApp from "./ui/global/footer/footer";
import { Headers } from "./ui/global/header/headers";
import Spacer from "./ui/home/component/spacer";
import Home from "./ui/home/home";
import { Category, ProductPage } from "./ui/user/browser/browser";
function App() {
  return (
    <div className="bg-black select-none list-none m-0 p-0" >
      <Spacer />
      <Headers />
      <Spacer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/browse" element={<Category />} />
        <Route path="/p/:id" element={<ProductPage />} />       
        <Route path="/admin" element={<Admin />} />   
      </Routes>
      <Spacer />
      <FooterApp />
    </div>
  );
}

export default App;
