import { Footer } from 'flowbite-react';
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Headers } from '../global/header/headers';
import { NotFoundPage } from '../page';
import { CategoryPage, ProductPage, SearchPage } from './browser/browser';
import { CartPage } from './checkout/cart/cart';
import { ContactPage } from './contact/contact';
import { HomePage } from './home/home';
import { AllNewsPage, DetailNewsPage } from './news/news';
import { UserHistoryPage } from './user_info/history/history';
import { HistoryDetailPage } from './user_info/history/history_detailed';
import { UserInfoPage } from './user_info/user_info';
import { WishListPage } from './wishlist/wishlist';

export const UserPage = () => {
  return (
    <Fragment>
      <div className="bg-black">
        <Headers />
        <Routes>
          <Route key="user-home-page" path="/" element={<HomePage />} />
          <Route key="user-browser-page" path="browser" element={<CategoryPage />} />
          <Route key="user-product-page" path="products/:productId" element={<ProductPage />} />
          <Route key="user-search-page" path="searched/:search" element={<SearchPage />} />
          <Route key="user-all-news-page" path="news" element={<AllNewsPage />} />
          <Route key="user-detail-news-page" path="news/:newsId" element={<DetailNewsPage />} />
          <Route key="user-info-page" path="info" element={<UserInfoPage />} />
          <Route key="cart" path="cart" element={<CartPage />} />
          <Route key="wishlist" path="wishlist" element={<WishListPage />} />
          <Route key="contact" path="contact" element={<ContactPage />} />
          <Route key="user-info-page" path="info" element={<UserInfoPage />} />
          <Route key="user-history-page" path="history" element={<UserHistoryPage />} />
          <Route
            key="user-detail-history-page"
            path="history/:billId"
            element={<HistoryDetailPage />}
          />
          <Route key="user-not found-page" path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Fragment>
  );
};
