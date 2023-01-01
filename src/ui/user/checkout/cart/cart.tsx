import axios from 'axios';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../../../model/product_model';
import { getCarts } from '../../../../services/user/getProduct';
import { CheckoutUtils } from '../../../../utils/checkout_utils';
import { CircularProgressIndicator } from '../../../../utils/circular_progress_indicator';
import { withCurrency } from '../../../../utils/product_utils';
import { EmptyList } from '../../../global/component/emptylist/empty_list';
import { CartCard } from './component';

export const CartPage = () => {
  const [productInCart, setProductInCart] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [findTotalAmount, setFindTotalAmount] = useState(0);
  const [findTax, setFindTax] = useState(0);
  const navigate = useNavigate();
  const productsId: string[] = [];
  useEffect(() => {
    getCarts(navigate).then((productList) => {
      setProductInCart(productList);
      let total = 0;
      productList.map((item) => (total = total + item.price * (1 - (item.discount || 0))));
      setFindTotalAmount(total);
      setFindTax(total * 0.05);
    });
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    for (const product of productInCart) {
      console.log(product.id);
      productsId.push(product.id ?? '');
    }
    console.log(productsId);
    setIsLoading(true);
  };

  if (productInCart.length === 0)
    return (
      <EmptyList
        title="Your cart is empty"
        description="Product added to your cart will appear here"
        buttonText="back to store"
        linkTo="/user"
      />
    );
  const startCheckoutProcess = async () => {
    for (const product of productInCart) {
      console.log(product.id);
      productsId.push(product.id ?? '');
    }
    console.log(productsId);
    setIsLoading(true);
    const checkoutUrl = await CheckoutUtils.getCheckoutUrl(productsId);
    window.location.href = checkoutUrl ?? window.location.href;
 
    setIsLoading(false);
  };
  return (
    <div className="flex flex-col mx-12 mt-12 lg:mx-40 md:mx-20">
      <div className="text-gray-100 text-2xl">Cart</div>

      {/* <div className='my-4 text-3xl font-light'>Cart</div> */}
      <div className="gap-3 sm:gap-6 sm:grid sm:grid-cols-2">
        <div data-testid="cart-page-list" className="sm:col-span-1">
          {productInCart.map((product) => (
            <CartCard key={product.id} product={product} classes="mb-3" navigation={navigate} />
          ))}
        </div>
        <div className="relative">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col font-mono text-sm top-4 sm:sticky sm:mt-0"
          >
            <div className="mb-3 text-base font-semibold">Order summary</div>
            <div className="flex justify-between py-1 text-gray-300">
              <div>Subtotal</div>
              <div className="tracking-wider text-white">{withCurrency(findTotalAmount)}</div>
            </div>
            <div className="flex justify-between py-1 text-gray-300">
              <div>Tax</div>
              <div className="tracking-wider text-white">{withCurrency(findTax)}</div>
            </div>
            <div className="my-1 border-t border-gray-700" />
            <div className="flex justify-between py-1 font-semibold">
              <div>Total</div>
              <div className="tracking-wider ">{withCurrency(findTax + findTotalAmount)}</div>
            </div>
            <button
              onClick={startCheckoutProcess}
              className={clsx(
                'w-full my-5 py-2 bg-blue-600 shadow-lg text-white font-semibold rounded-lg h-12',

                'cursor-pointer ',
              )}
            >
              {isLoading ? <CircularProgressIndicator /> : <span>Purchase</span>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
