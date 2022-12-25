import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { getWishlist } from '../../../services/user/getProduct';
import { useAppSelector } from '../../../store/hook';
import { selectWishlisted } from '../../../store/user_product_slice';
import { EmptyList } from '../../global/component/emptylist/empty_list';
import { Pagination } from '../../global/component/pagination/pagination';
import { WishlistCard } from './component';

export const WishListPage = () => {
  const [wishlist, setWishlist] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getWishlist(navigate).then((productList) => {
      setWishlist(productList);
    });
  }, []);

  if (wishlist.length === 0) {
    return (
      <EmptyList
        title="Your wishlist is empty"
        description="Product added to your wishlist will appear here"
        buttonText="back to store"
        linkTo="/"
      />
    );
  }

  return (
    <div className="flex flex-col mx-12 mt-12 lg:mx-40 md:mx-20">
      <Helmet>
        <title>Wishlist</title>
        <meta
          name="description"
          content={`The wishlisted games appear here. There are currently ${wishlist.length} games in this page now.`}
        />
      </Helmet>
      <div
        aria-label="wishlist-page-list"
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {wishlist.map((product) => (
          <WishlistCard
            key={product.id}
            id={product.id || '100001'}
            date="2021-06-10T08:30:00Z"
            imageUrl={product.imageList![0]}
            title={product.title}
            discount={product.discount || 0}
            price={product.price}
            realeaseDate={product.releaseDate}
            navigation={navigate}
          />
        ))}
      </div>
    </div>
  );
};
