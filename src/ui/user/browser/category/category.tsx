import { ListGenres, ListProducts, PopularGenres, ProductSortList, SearchItem } from './component';

export const CategoryPage: React.FC = () => {
  return (
    <div className="flex flex-col mx-12 mt-12 lg:mx-40 md:mx-20">
      <div className="flex items-center space-x-20 mt-2 mb-8">
        <SearchItem />
        <ProductSortList />
      </div>
      <ListProducts />
    </div>
  );
};

// {/** Popular Genres */}
//       {/* <PopularGenres /> */}

//       {/** List Product */}
//       <div className="grid grid-cols-5 space-x-10">
//         {/** Show List Product */}
//         <div className="col-span-4">

//         </div>

//         {/** Show Filter */}
//         {/* <div className="col-span-1">
//           <ListGenres />
//         </div> */}
//       </div>
