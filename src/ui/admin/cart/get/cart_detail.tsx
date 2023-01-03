import { HomeIcon, ShoppingCartIcon, TruckIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../../../model/product_model';
import { User } from '../../../../model/user_model';
import { getUserById } from '../../../../services/user/get';
import { CheckoutUtils } from '../../../../utils/checkout_utils';
import { getPaymentStatusColor, ProductUtils } from '../../../../utils/product_utils';
import { ProductDetailedItemComponent } from '../../../user/user_info/component';
import { BreadCrumbComponent } from '../../component/breadcrumb';
import { TableComponent } from '../../component/table';
import { IBill } from './cart_item';

export const CartDetailComponent = (props: any) => {
  const [user, setUser] = useState<User>();
  const [bill, setBill] = useState<IBill>();
  const [products, setProducts] = useState<Product[]>([]);
  // const [rawCheckoutSession, setRawCheckoutSession] = useState();
  const [address, setAddress] = useState<any>({
    city: '',
    country: '',
    line1: '',
    line2: '',
    postal_code: '',
  });
  const cartId = useParams<{ cartId: string }>();
  useEffect(() => {
    const getBill = async () => {
      const result = await CheckoutUtils.getBillById(cartId.cartId ?? '');

      setBill(result);
      const user = await getUserById(result.customer);
      setUser(user);
      const products = await ProductUtils.getProducts(result.products);
      console.log(result);

      setProducts(products);
      console.log(result.stripeId);

      const rawCheckoutSession = await CheckoutUtils.getRawCheckoutSession(result.stripeId);
      console.log(rawCheckoutSession.customer_details.address);

      setAddress(rawCheckoutSession.customer_details.address);
    };
    getBill();
  }, []);

  return (
    <div className="relative bg-white">
      <div className="mb-1 shadow-sm">
        <BreadCrumbComponent
          key="bread-crumb-component-key"
          list={[
            { name: 'Dashboard', icon: <HomeIcon className="w-4 h-4" />, path: '/admin' },
            {
              name: 'Carts',
              icon: <ShoppingCartIcon className="w-4 h-4" />,
              path: '/admin/carts',
            },
            { name: 'View Cart', icon: <TruckIcon className="w-4 h-4" /> },
          ]}
        />
      </div>
      <div className="flex justify-between">
        <div>
          <div className="font-bold">Bill To</div>
          <div>{`${user?.firstName} ${user?.lastName}`}</div>
          <div>{`${address.line1 ?? ' '}`}</div>
          <div>{`${address.city ?? ' '} ${address.state ?? ' '}, ${
            address.postal_code ?? ' '
          }`}</div>
        </div>

        <div>
          <div>
            <span className="font-bold">Date: </span>
            <span>{` ${bill?.date ?? ' '}`}</span>
          </div>
          <div>
            <span className="font-bold">Payment Status: </span>
            <span className={clsx(getPaymentStatusColor(bill?.paymentStatus ?? ''))}>{` ${
              bill?.paymentStatus.toUpperCase() ?? ''
            }`}</span>
          </div>
        </div>
        <div></div>
      </div>

      <TableComponent
        key="table-component-key"
        headerList={['ID', 'TITLE', 'PRICE', 'DISCOUNT', 'SUBTOTAL']}
        bodyList={products.map((product, index) => {
          console.log('product');
          console.log(product);

          return (
            <ProductDetailedItemComponent
              product={product}
              index={index + 1}
              key={`${index}-${product.id}`}
            />
          );
        })}
      />
      <div className="flex justify-between">
        <div></div>
        <div className="text-black text-2xl ">TOTAL: {bill?.total}</div>
      </div>
    </div>
  );
};
