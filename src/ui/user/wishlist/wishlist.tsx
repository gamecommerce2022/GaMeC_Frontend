import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { EmptyList } from '../../global/component/emptylist/empty_list';
import { Pagination } from '../../global/component/pagination/pagination';
import { WishlistCard } from './component';

export const WishListPage = () => {
  const wishlist: any[] = [];
  const wishlistIds = [5, 6, 7, 8];
  const [defaultPage, setDefaultPage] = useState(0);

  function goToNextPage(page: number) {}

  if (wishlist.length === 0) {
    return (
      <EmptyList
        title="Your wishlist is empty"
        description="Games added to your wishlist will appear here"
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
          content={`The wishlisted games appear here. There are currently ${wishlistIds.length} games in this page now.`}
        />
      </Helmet>
      <div
        aria-label="wishlist-page-list"
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {wishlist.map((game) => (
          <WishlistCard
            key={game.id}
            id={game.id}
            date="2021-06-10T08:30:00Z"
            imageUrl={game.imageUrl}
            title={game.title}
            discount={game.discount}
            price={game.price}
            realeaseDate={game.realeaseDate}
          />
        ))}
      </div>
      <Pagination
        pagesCount={defaultPage}
        pageRangeDisplayed={5}
        onChange={(selected) => {
          goToNextPage(selected.selected);
        }}
      />
    </div>
  );
};
