import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import FooterApp from "./ui/global/footer/footer";
import { Headers } from "./ui/global/header/headers";
import Spacer from "./ui/home/component/spacer";
import Home from "./ui/home/home";
import { Category } from "./ui/user/browser/browser";
import { ProductInfoPage } from "./ui/user/browser/product_info_page/product_info_page";
import { ProductListPage } from "./ui/user/browser/product_list_page/product_list_page";
function App() {
  return (
    <div className="bg-black select-none">
      <Spacer />
      <Headers />
      <Spacer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/browse" element={<Category />} />
        <Route path="/p/:id" element={<ProductInfoPage />} />
      </Routes>
      <Spacer />
      <FooterApp />
    </div>
  );
}

export default App;
