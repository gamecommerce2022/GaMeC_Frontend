import { useRef } from "react";
import { Navigate } from "react-router-dom";
import Slider from "react-slick";
import { Product } from "../../../../model/product/product";
import { reviews } from "../../../../data/DataProduct";
import { singleSettings } from "../../../../config/carousel_setting";
import { getRandomNumber } from "../../../../utils/date_utils";
import {
 ProductCard,
 ProductFeatureBox,
 ProductImage,
 ProductReviewSection,
 ProductSpecifications,
} from "./component";

export interface IGamePageTemplateProps {
 product: Product | null;
 similarProduct: Product[];
}
export const ProductPageTemplate = ({
 product,
 similarProduct,
}: IGamePageTemplateProps) => {
 const sliderRef = useRef<Slider>(null);
 if (!product) <Navigate to="/404" />;
 return (
  <div className="lg:mx-40 md:mx-20 sm:mx-20">
   {product && (
    <div>
     <div className="my-3 text-4xl text-gray-100">{product.title}</div>
     <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
      <div className="order-2 md:col-span-2 md:order-1">
       <ProductImage images={Array(20).fill(product.imageUrl)}/>
       <div className="my-4 text-lg">{product.description}</div>
       <div className="grid grid-cols-2 my-4">
        <ProductFeatureBox
         title="Genres"
         value={product.tags}
        />
        <ProductFeatureBox title="Features" value={product.feature} />
        <ProductFeatureBox
         title="Platforms"
         value={product.platform}
        />
       </div>
       <div className="mt-6">
        {product.longDesc?.map((item) => (
         <div
          key={item}
          className={`mb-2 text-gray-400 ${item.length < 80 ? "mt-4 font-semibold" : "text-sm"
           }`}
         >
          {item}
         </div>
        ))}
       </div>
       <div className="mt-6">
        <div className="text-xl text-gray-200">
         Product Specifications
        </div>
        <ProductSpecifications />
       </div>
       <div className="mt-6">
        <div className="text-xl font-semibold text-gray-200">
         Reviews
        </div>
        <ProductReviewSection
         averageRating={getRandomNumber(0, 100)}
         count={getRandomNumber(3, 20000)}
         reviews={reviews}
        />
       </div>
      </div>
      <div className="order-1 col-span-1 md:order-2">
       <div className="sticky top-24">
        <ProductCard product={product} />
       </div>
      </div>
     </div>
    </div>
   )}
  </div>
 );
};
