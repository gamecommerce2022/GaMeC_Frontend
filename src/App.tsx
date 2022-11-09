import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./ui/authentication/login/login";
import SignUpForm from "./ui/authentication/signup/signup";
import FooterApp from "./ui/global/footer/footer";
import { Headers } from "./ui/global/header/headers";
import Spacer from "./ui/home/component/spacer";
import Home from "./ui/home/home";
import { Category } from "./ui/user/browser/browser";
import { ProductInfoPage } from "./ui/user/browser/product_info_page/product_info_page";
function App() {
  return (
    <div className="bg-black select-none">
      <Spacer />
      <Headers />
      <Spacer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/product-list" element={<Category />} />
        <Route path="/products/:id" element={<ProductInfoPage />} />
      </Routes>
      <Spacer />
      <FooterApp />
    </div>
  );
}

export default App;
