import { useRef } from "react";
import { Navigate } from "react-router-dom";
import Slider from "react-slick";
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
import { Product } from "../../../../model/product_model";

export interface IGamePageTemplateProps {
  product: Product | null;
}
export const ProductPageTemplate = ({ product }: IGamePageTemplateProps) => {
  const sliderRef = useRef<Slider>(null);
  if (!product) <Navigate to="/404" />;
  return (
    <div className="lg:mx-40 md:mx-20 sm:mx-20">
      {product && (
        <div>
          <div className="my-3 text-4xl text-gray-100">{product.title}</div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="order-2 md:col-span-2 md:order-1">
              <ProductImage images={product.image_list} />
              <div className="my-4 text-lg">{product.addition_info}</div>
              {/* <div className="grid grid-cols-2 my-4">
        <ProductFeatureBox
         title="Genres"
         value={product.type}
        />
        <ProductFeatureBox title="Features" value={product.feature} />
        <ProductFeatureBox
         title="Platforms"
         value={product.platform}
        />
       </div> */}
              {product.videos.length > 0 && (
                <div className="mt-6">
                  {product.videos.map((item) => {
                    return (
                      <iframe
                        className="w-full aspect-video md:aspect-square mb-2 "
                        src={item}
                        title={item}
                        width={1000}
                        height={500}
                      ></iframe>
                    );
                  })}
                </div>
              )}
              <div className="mt-6 flex flex-col">
                {product.description?.map((item) => {
                  if (item.includes("https://") === true) {
                    return (
                      <div className="mb-2 justify-self-center aspect-square ">
                        <img
                          className="object-fill w-full h-full"
                          src={item}
                          alt={item}
                        />
                      </div>
                    );
                  } else {
                    return (
                      <div
                        className={`mb-2 text-gray-400 ${
                          item.length < 80 ? "mt-4 font-semibold" : "text-sm"
                        }`}
                      >
                        {item}
                      </div>
                    );
                  }
                })}
              </div>
              {/* <div className="mt-6">
        <div className="text-xl text-gray-200">
         Product Specifications
        </div>
        <ProductSpecifications />
      </div> */}
              <div className="mt-6">
                <div className="text-xl font-semibold text-gray-200">
                  Reviews
                </div>
                <ProductReviewSection
                  averageRating={product.rate}
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