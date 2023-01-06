import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Product } from '../../../../model/product_model';
import { ProductPageTemplate } from './product_template';
import * as ProductService from '../../../../services/product/product';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { getCurrentUser } from '../../../../services/user/get';

export interface IGamePageProps {}

export const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct]: [Product | undefined, (products: Product) => void] = useState();
  const [reviews, setReviews] = useState<any>([]);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  const [comment, setComment] = useState<string>();
  const [author, setAuthor] = useState<any>();
  const [isWishlist, setIsWishlist] = useState(false)
  const [isInCart, setIsInCart] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    if (productId !== undefined) {
      getCurrentUser(navigate).then((user) => {
        setAuthor(user);
        const foundWishlist = (user.favorites as Array<string>).find(element => element === productId)
        if(foundWishlist !== undefined){
          setIsWishlist(true)
        } 
        const foundInCart = (user.carts as Array<string>).find(element => element === productId)
        if(foundInCart !== undefined){
          setIsInCart(true)
        } 
        console.log(`Author: ${user} \n Wishlist: ${foundWishlist} \n InCart: ${foundInCart}`);
      });
      ProductService.getProductById(productId).then((product) => {
        ProductService.getCommentByProduct(productId).then((review) => {
          setReviews(review);
          console.log(review);
        });
        setProduct(product);        
        setLoading(false);
      });
    }
  }, [productId]);
  return (
    <div>
      {loading ? null : product ? (
        <div>
          <ProductPageTemplate product={product} reviews={reviews} isInCart={isInCart} isWishlist={isWishlist} />
          <div className="lg:ml-80 lg:mr-[40rem] md:mx-20 sm:mx-20 mb-20">
            <div className="text-lg font-medium leading-6 text-gray-100 mb-4">Comment</div>
            <div className="flex flex-row">
              <textarea
                id="message"
                rows={3}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-none border-gray-300 focus: focus:border-none focus:ring-0"
                placeholder="Comment Here...."
                value={comment}
                onChange={(event) => {
                  setComment(event.target.value);
                }}
              ></textarea>
              <PaperAirplaneIcon
                className="py-2.5 px-5 m-2 w-8 text-base font-medium text-white hover:text-gray-300"
                onClick={async () => {
                  if (comment === undefined || comment === '' || comment === null) {
                    return;
                  }
                  await ProductService.addComment(
                    productId!,
                    author._id,
                    author.displayName,
                    comment ?? '',
                    navigate,
                  );
                }}
              />
            </div>
          </div>{' '}
        </div>
      ) : null}
    </div>
  );
};
