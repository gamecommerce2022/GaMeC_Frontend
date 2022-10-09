import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductInformation } from "../../model/product/product";

export const ProductInfoPage = () => {
 // 👇️ get ID from url
 const params = useParams();

 const [product, setProduct] = useState<ProductInformation>();

 useEffect(() => {
  const getProduct = async () => {
   const productInfo = await axios.get(gameUrl(params.id));
   console.log(productInfo);
   setProduct(productInfo.data);
  }
  getProduct();
 }, [params.id]);

 console.log(params); // 👉️ {userId: '4200'}
 return (
  <div className="mx-auto max-w-screen-2xl py-12 px-12 bg-black">
   <h1 className="text-2xl font-medium text-white">Product Information: {params.id}</h1>
   <h1 className="text-2xl font-medium text-white">Product Name: {product?.name}</h1>
   <div className="flex flex-row py-4 px-12 bg-white w-full">
    <h1 className="bg-red-300 w-2/3 h-[28rem]">Product Image Or Video List</h1>
    <div className="flex flex-col ml-12 w-1/3">
     <h1 className="bg-blue-300 w-full h-48">Product Main Image</h1>
     <h1 className="mt-8 text-xl font-medium">Product Price</h1>
     <h1 className="mt-8 text-xl font-medium">Button Buy Now</h1>
     <h1 className="mt-8 text-xl font-medium">Button Add To Cart</h1>
     <h1 className="mt-8 text-xl font-medium">Button Add To Wishlist</h1>
    </div>
   </div>
   <div className="mt-8 text-sm font-medium text-white" >Product Short Introduction:
    {product?.description}
   </div>

   <div className="flex flex-row px-12 mt-8">
    <div className="w-1/2 h-40 bg-light-green-200 mr-4">
     <div className="text-xl font-medium text-white">Product Type:
      {product?.tags.map((tag) => <h1>{tag.name}</h1>)}
     </div>
    </div>

    <div className="w-1/2 h-40 bg-light-green-200 ml-4">
     <div className="text-xl font-medium text-white">Product Genes:
      {product?.genres.map((genres) => <h1>{genres.name}</h1>)}
     </div>
    </div>


   </div>
   <div className="mt-8 bg-deep-orange-200">
    <h1 className="text-xl font-medium text-white">Product Detail Description</h1>
    <div className="text-sm font-medium text-white">
     {product?.description_raw}
    </div>
   </div>
   <div className="mt-8 h-80 bg-amber-200">
    <h1>Product DLC</h1>
   </div>

   <div className="mt-8 h-80 bg-amber-200">
    <h1>Product Rating</h1>
   </div>

   <div className="mt-8 h-80 bg-amber-200">
    <h1>Product Require</h1>
   </div>


  </div>
 )
}

function gameUrl(id: string | undefined): string {
 throw new Error("Function not implemented.");
}
