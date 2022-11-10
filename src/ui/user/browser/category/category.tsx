import {
  ListGenres,
  ListProducts,
  PopularGenres,
  ProductSortList,
} from "./component";

export const CategoryPage: React.FC = () => {
  return (
    <div className="flex flex-col mx-12 space-y-20">
      {/** Popular Genres */}
      <PopularGenres />

      {/** List Product */}
      <div className="grid grid-cols-5 space-x-10">
        {/** Show List Product */}
        <div className="col-span-4">
          <ProductSortList />
          <ListProducts />
        </div>

        {/** Show Filter */}
        <div className="col-span-1">
          <ListGenres />
        </div>
      </div>
    </div>
  );
};
