import { Navigate } from 'react-router-dom';
import { ProductCard, ProductFeatureBox, ProductImage, ProductReviewSection } from './component';
import { Product } from '../../../../model/product_model';
import { Comment } from '../../../../model/comment';

export interface IGamePageTemplateProps {
  product: Product | null;
  reviews: Comment[];
}
export const ProductPageTemplate = ({ product, reviews }: IGamePageTemplateProps) => {
  if (!product) <Navigate to="/404" />;
  return (
    <div className="lg:mx-80 md:mx-20 sm:mx-20">
      {product && (
        <div>
          <div className="mt-3 text-4xl text-gray-100">{product.title}</div>
          <div className="mb-3 text-xl text-gray-200">{product.shortDescription}</div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="order-2 md:col-span-2 md:order-1">
              <ProductImage images={product.imageList!} />
              <div className="grid grid-cols-2 my-4">
                <ProductFeatureBox title="Genres" value={product.type} />
                <ProductFeatureBox title="Tags" value={product.tags} />
              </div>
              {/* {product.videoList!.length > 0 && (
                <div className="mt-6">
                  {product.videoList?.map((item) => {
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
              )} */}

              {product.note !== undefined ? (
                <span className="text-red-500 text-base">
                  <span className="italic">Notes: </span> {product.note}
                </span>
              ) : null}

              {product.description === '' ? null : (
                <div className="mt-6 flex flex-col">
                  <div className="text-white font-bold text-xl">Description</div>
                  <div
                    className={`mb-2 text-gray-400 ${
                      product.description.length < 80 ? 'mt-4 font-semibold' : 'text-sm'
                    }`}
                  >
                    {product.description}
                  </div>
                </div>
              )}

              {/* <div className="mt-6">
        <div className="text-xl text-gray-200">
         Product Specifications
        </div>
        <ProductSpecifications />
      </div> */}
              <div className="mt-6">
                <div className="text-xl font-semibold text-gray-200">Reviews</div>
                <ProductReviewSection count={reviews.length ?? 0} reviews={reviews} />
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
