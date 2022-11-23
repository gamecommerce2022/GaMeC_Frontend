import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from '../page';
import { SidebarComponent } from './component/side_navigator';
import { ProductAddComponent } from './product/add/product_add';
import { ProductEditComponent } from './product/edit/product_edit';
import { ProductTableComponent } from './product/get/product_table';

export const AdminPage = () => {
  return (
    <div className="flex flex-row h-fit bg-[#f9fafb]">
      <SidebarComponent />

      <div className="flex-1 m-4 lg:m-10 sm:m-6 shawdow drop-shadow-md p-4 rounded-xl bg-white h-[900px]">
        <Routes>
          <Route key="admin-dashboard-page" path="/" element={<div>Dashboard</div>} />
          <Route key="admin-product-page" path="products" element={<ProductTableComponent />} />
          <Route
            key="admin-product-add-page"
            path="products/add"
            element={<ProductAddComponent />}
          />
          <Route
            key="admin-product-edit-page"
            path="products/:productId"
            element={<ProductEditComponent />}
          />
          <Route key="admin-news-page" path="news" element={<div></div>} />
          <Route key="admin-news-edit-page" path="news/:newsId" element={<div></div>} />
          <Route key="admin-account-page" path="accounts" element={<div></div>} />
          <Route key="admin-info-page" path="info" element={<div></div>} />
          <Route key="admin-cart-page" path="carts" element={<div></div>} />
          <Route key="admin-not-found-page" path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};
