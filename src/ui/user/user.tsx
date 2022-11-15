import { Footer } from 'flowbite-react';
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Headers } from '../global/header/headers';
import { NotFoundPage } from '../page';
import { CategoryPage, ProductPage, SearchPage } from './browser/browser';
import { HomePage } from './home/home';
import { AllNewsPage, DetailNewsPage } from './news/news';
import { UserInfoPage } from './user_info/user_info';

export const UserPage = () => {
  return (
    <Fragment>
      <Headers />
      <Routes>
        <Route key="user-home-page" path="/" element={<HomePage />} />
        <Route key="user-browser-page" path="browser" element={<CategoryPage />} />
        <Route key="user-product-page" path="products/:productId" element={<ProductPage />} />
        <Route key="user-search-page" path="searched/:search" element={<SearchPage />} />
        <Route key="user-all-news-page" path="news" element={<AllNewsPage />} />
        <Route key="user-detail-news-page" path="news/:newsID" element={<DetailNewsPage />} />
        <Route key="user-info-page" path="info" element={<UserInfoPage />} />
        <Route key="user-not found-page" path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};
