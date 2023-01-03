import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../../../model/product_model';
import { User } from '../../../../model/user_model';
import { getUserById } from '../../../../services/user/get';
import { CheckoutUtils } from '../../../../utils/checkout_utils';
import { ProductUtils, getPaymentStatusColor } from '../../../../utils/product_utils';
import { IBill } from '../../../admin/cart/get/cart_item';
import { TableComponent } from '../../../admin/component/table';
import { ProductDetailedItemComponent } from '../component';

export const HistoryDetailPage = () => {
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
  const billId = useParams<{ billId: string }>();
  useEffect(() => {
    const getBill = async () => {
      const result = await CheckoutUtils.getBillById(billId.billId ?? '');

      setBill(result);
      const user = await getUserById(result.customer);
      setUser(user);
      const products = await ProductUtils.getProducts(result.products);
      console.log(result);

      setProducts(products);
      console.log(result.stripeId);

      const rawCheckoutSession = await CheckoutUtils.getRawCheckoutSession(result.stripeId);
      console.log(rawCheckoutSession.customer_details.address);

      setAddress(
        rawCheckoutSession.customer_details.address || {
          city: '',
          country: '',
          line1: '',
          line2: '',
          postal_code: '',
        },
      );
    };
    getBill();
  }, []);

  return (
    <div className="bg-white h-screen">
      <div className="flex justify-between p-16">
        <div>
          <div className="font-bold">Bill To</div>
          <div>{`${user?.firstName} ${user?.lastName}`}</div>
          <div>{`${address.line1}`}</div>
          <div>{`${address.city} ${address.state ?? ' '}, ${address.postal_code}`}</div>
        </div>

        <div>
          <div>
            <span className="font-bold">Date: </span>
            <span>{` ${bill?.date}`}</span>
          </div>
          <div>
            <span className="font-bold ">Payment Status: </span>
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

const SuccessComponent = () => {
  const [htmlCode, setHtmlCode] = useState('<div></div>');
  const billId = useParams<{ billId: string }>();
  useEffect(() => {
    const getBill = async () => {
      const bill = await CheckoutUtils.getBillById(billId.billId || '');
      const rawCheckoutSession = await CheckoutUtils.getRawCheckoutSession(bill.stripeId);

      const paymentIntent = await CheckoutUtils.getPaymentIntent(rawCheckoutSession.payment_intent);
      const htmlCode = await CheckoutUtils.getInvoiceHtml(paymentIntent.latest_charge);
      setHtmlCode(htmlCode);
    };
    getBill();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: `${htmlCode}` }}></div>;
};
