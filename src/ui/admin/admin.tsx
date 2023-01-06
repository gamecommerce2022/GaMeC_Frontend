import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import UserUtils from '../../utils/user_utils';
import { NotFoundPage } from '../page';
import { CartDetailComponent } from './cart/get/cart_detail';
import { CartTableComponent } from './cart/get/cart_table';
import { SidebarComponent } from './component/side_navigator';
import { InfoComponent } from './info/info_component';
import { ReportTableComponent } from './info/report_table';
import { NewsAddComponent } from './news/add/news_add';
import { NewsEditComponent } from './news/edit/news_edit';
import { NewsTableComponent } from './news/get/news_table';
import { ProductAddComponent } from './product/add/product_add';
import { CommentTableComponent } from './product/comment/get_comment';
import { ProductEditComponent } from './product/edit/product_edit';
import { ProductTableComponent } from './product/get/product_table';
import { AddAdminComponent } from './user/add/user_add';
import { EditAdminComponent } from './user/edit/edit_admin';
import { UserTableComponent } from './user/get/user_table';

export const AdminPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const getUserRole = async () => {
      const userRole = await UserUtils.getUserRole();
      if (userRole !== 'admin' || userRole === null) {
        navigate('/user');
      }
    };
    getUserRole();
  }, []);

  return (
    <div className="flex flex-row h-fit bg-[#f9fafb]">
      <SidebarComponent />

      <div className="flex-1 m-4 lg:m-10 sm:m-6 shawdow drop-shadow-md p-4 rounded-xl bg-white h-[900px]">
        <Routes>
          {/* <Route key="admin-dashboard-page" path="/" element={<div>Dashboard</div>} /> */}
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
          <Route
            key="admin-product-comments-page"
            path="products-comments/:productId"
            element={<CommentTableComponent />}
          />
          <Route key="admin-news-page" path="news" element={<NewsTableComponent />} />
          <Route key="admin-news-add-page" path="news/add" element={<NewsAddComponent />} />
          <Route key="admin-news-edit-page" path="news/:newsId" element={<NewsEditComponent />} />
          <Route key="admin-account-page" path="/" element={<UserTableComponent />} />
          <Route key="admin-account-page" path="accounts" element={<UserTableComponent />} />
          <Route key="admin-user-add-page" path="accounts/add" element={<AddAdminComponent />} />
          <Route
            key="admin-accounts-edit-page"
            path="accounts/:accountId"
            element={<EditAdminComponent />}
          />
          <Route key="admin-report-page" path="report" element={<ReportTableComponent />} />
          <Route key="admin-info-page" path="info" element={<InfoComponent />} />
          <Route key="admin-cart-page" path="carts" element={<CartTableComponent />} />
          <Route
            key="admin-cart-detailed-page"
            path="carts/:cartId"
            element={<CartDetailComponent />}
          />
          <Route key="admin-not-found-page" path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};
