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
import { default as dayjs } from 'dayjs';
import { CircularProgressIndicator } from '../../../../utils/circular_progress_indicator';
import { ToastContainer, toast } from 'react-toastify';

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
  const [isLoading, setIsLoading] = useState(false);
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

  const SendingInvoiceButton = () => {
    return (
      <button
        onClick={async () => {
          setIsLoading(true);
          const statusCode = await CheckoutUtils.sendInvoice(user?.id || '', bill?.id || '');
          setIsLoading(false);
          if (statusCode === 200) {
            toast.success('An email receipt has been sent to your email', { theme: 'dark' });
          } else {
            toast.error('Error sending email, please try again later', { theme: 'dark' });
          }
        }}
        className={clsx(
          'w-auto my-5 py-2 bg-blue-600 brightness-90 hover:brightness-100 shadow-lg text-white font-semibold rounded-lg h-12 hover:cursor-pointer ',
        )}
      >
        {isLoading ? <CircularProgressIndicator /> : <span>Send invoice</span>}
      </button>
    );
  };

  return (
    <div className="bg-white h-screen">
      <ToastContainer />
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

            <span> {dayjs(bill?.date).format('DD-MM-YYYY HH:mm:ss')}</span>
          </div>
          <div>
            <span className="font-bold ">Payment Status: </span>
            <span className={clsx(getPaymentStatusColor(bill?.paymentStatus ?? ''))}>{` ${
              bill?.paymentStatus.toUpperCase() ?? ''
            }`}</span>
          </div>
        </div>

        {bill?.paymentStatus === 'success' ? <SendingInvoiceButton /> : <div></div>}
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
