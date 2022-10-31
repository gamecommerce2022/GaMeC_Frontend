import { ListGenres, ListProducts, PopularGenres } from './component';

export const Category: React.FC = () => {
 return (
  <div className="flex flex-col mx-40 space-y-20">
   {/** Popular Genres */}
   <PopularGenres />

   {/** List Product */}
   <div className='flex flex-row space-x-6'>

    {/** Show List Product */}
    <ListProducts />

    {/** Show Filter */}
    <ListGenres />
   </div>
  </div>)
}