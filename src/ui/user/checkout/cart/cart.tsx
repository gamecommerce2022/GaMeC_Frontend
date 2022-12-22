import { useState } from 'react';
import { Product } from '../../../../model/product_model';
import { withCurrency } from '../../../../utils/product_utils';
import { EmptyList } from '../../../global/component/emptylist/empty_list';
import { CartCard } from './component';

export const CartPage = () => {
  const productInCart: Product[] = [];
  const [loading, setLoading] = useState(false);
  const findTotalAmount = 1000000;
  const findTax = 600;

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
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

  return (
    <div className="flex flex-col mx-12 mt-12 lg:mx-40 md:mx-20">
      <div className="text-gray-100 text-2xl">Cart</div>

      {/* <div className='my-4 text-3xl font-light'>Cart</div> */}
      <div className="gap-3 sm:gap-6 sm:grid sm:grid-cols-2">
        <div data-testid="cart-page-list" className="sm:col-span-1">
          {productInCart.map((product) => (
            <CartCard key={product.id} product={product} classes="mb-3" />
          ))}
        </div>
        <div className="relative">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col font-mono text-sm top-4 sm:sticky sm:mt-0"
          >
            <div className="mb-3 text-base font-semibold">Order summary</div>
            <div className="flex justify-between py-1">
              <div>Subtotal</div>
              <div className="tracking-wider ">{withCurrency(findTotalAmount)}</div>
            </div>
            <div className="flex justify-between py-1">
              <div>Tax</div>
              <div className="tracking-wider ">{withCurrency(findTax)}</div>
            </div>
            <div className="my-1 border-t border-gray-700" />
            <div className="flex justify-between py-1 font-semibold">
              <div>Total</div>
              <div className="tracking-wider ">{withCurrency(findTax + findTotalAmount)}</div>
            </div>
            <button
              className="w-full px-4 py-3 mt-4 tracking-widest bg-primary btn hover:bg-primary-600"
              type="submit"
            >
              {loading ? 'Purchasing...' : 'Checkout'}
            </button>
            <div className="mt-2 text-xs text-gray-400">
              <div>Stripe payment is temporarily disabled in this project.</div>
              <div>
                Please refer to{' '}
                <a
                  target="_blank"
                  className="text-primary"
                  href="https://ikea.iamkarthick.com"
                  rel="noreferrer"
                >
                  IKEA Clone
                </a>
                or
                <a
                  target="_blank"
                  className="text-primary"
                  href="https://zillow.iamkarthick.com"
                  rel="noreferrer"
                >
                  Zillow Clone
                </a>{' '}
                to see stripe payment in action.
                <div>Thankyou</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
