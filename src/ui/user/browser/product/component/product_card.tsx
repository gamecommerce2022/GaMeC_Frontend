import { Link } from "react-router-dom";
import { Product } from "../../../../../model/product_model";
import { Badge } from "./badge";
import { Price } from "./price";

export interface IProductCardProps {
 product: Product;
}

const KeyValue = ({ label, value }: { label: string; value: string }) => (
 <div className="flex justify-between py-2">
  <div className="text-gray-400">{label}</div>
  <div className="text-white">{value}</div>
 </div>
);

export const ProductCard = ({ product }: IProductCardProps) => {
 const getDate = (date: string) => new Date(date).toLocaleDateString();

 const values = [
  { label: "Release Date", value: getDate(product.release_date) || "" },
  { label: "Platform", value: product.platform },
 ];

 // const { uid } = useAppSelector(selectUser)

 return (
  <div>
   <div className="mt-6 bg-primary aspect-w-1 aspect-h-1 bg-opacity-10">
    <img
     className="object-fill object-center w-full p-2"
     src={product.short_image}
     alt=""
    />
   </div>

   <Badge className="mt-4">{"base product".toUpperCase()}</Badge>
   <Price
    price={parseInt(product.price_before)}
    discount={
     1 - parseFloat(
      (
       parseFloat(product.price_after) /
       parseFloat(product.price_before)
      ).toFixed(2),
     )
    }
    classes="mt-2"
   />
   {
    <>
     <button
      className="w-full py-2 mt-4 bg-[#a63822] btn btn-xl text-gray-50 rounded text-sm lg:text-base border-none hover:bg-[#b45745] active:bg-[#b45745] active:ring-2 active:ring-white"
      type="button"
      onClick={
       () => { }
       // updateUserGames({
       //  uid: uid || '',
       //  gameId: product.id,
       //  status:
       //   product.status === 'IN_CART' ? 'REMOVED_FROM_CART' : 'IN_CART',
       //  history,
       // })
      }
     >
      {"GET"}
     </button>

     <button
      className="w-full py-2 mt-4 bg-transparent btn btn-xl text-gray-50 rounded text-sm lg:text-base border-none ring-1 ring-white hover:bg-[#404040] active:bg-[#404040] active:ring-2"
      type="button"
      onClick={
       () => { }
       // updateUserGames({
       //  uid: uid || '',
       //  gameId: product.id,
       //  status: product.wishlisted
       //   ? 'REMOVED_FROM_WISHLIST'
       //   : 'WISHLISTED',
       //  history,
       // })
      }
     >
      {false ? "IN CART" : "ADD TO CART"}
     </button>

     <button
      className="w-full py-2 mt-4 bg-transparent btn btn-xl text-gray-50 rounded text-sm lg:text-base border-none ring-1 ring-white hover:bg-[#404040] active:bg-[#404040] active:ring-2"
      type="button"
      onClick={
       () => { }
       // updateUserGames({
       //  uid: uid || '',
       //  gameId: product.id,
       //  status: product.wishlisted
       //   ? 'REMOVED_FROM_WISHLIST'
       //   : 'WISHLISTED',
       //  history,
       // })
      }
     >
      {false ? "IN WISHLIST" : "ADD TO WISHLIST"}
     </button>
    </>
   }
   <div className="mt-2 text-sm lg:text-base">
    {values.map(({ label, value }) => (
     <KeyValue key={label} label={label} value={value} />
    ))}
   </div>
  </div>
 );
};