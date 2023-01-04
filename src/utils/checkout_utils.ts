import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { config } from '../services/config';
import { shoppingUrl } from '../services/url';
import { getUserById } from '../services/user/get';
import { IBill } from '../ui/admin/cart/get/cart_item';

export class CheckoutUtils {
  public static getRawCheckoutSession = async (id: string) => {
    const { data } = await axios.get(`${shoppingUrl}/get-raw-checkout-session/${id}`, config);
    return data.checkoutSession;
  };
  public static getPaymentIntent = async (id: string) => {
    const result = await axios.get(`${shoppingUrl}/get-payment-intent/${id}`, config);

    return result.data.paymentIntent;
  };
  public static getInvoiceHtml = async (chargeId: string) => {
    const result = await axios.get(`${shoppingUrl}/get-charge/${chargeId}`, config);
    return result.data.html;
  };
  public static getCheckoutUrl = async (products: string[]) => {
    let checkoutUrl;
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/shopping/create-checkout-session`,
        { products: products },
        config,
      )
      .then((res) => {
        checkoutUrl = res.data.session.url;
      });
    return checkoutUrl;
  };
  public static getBillById = async (id: string) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/shopping/get-checkout-session/${id}`,
      config,
    );
    const shopping = data.shopping;
    console.log(shopping);

    const bill: IBill = {
      id: shopping._id,
      customer: shopping.userId,
      date: shopping.createdAt,
      paymentStatus: shopping.paymentStatus,
      products: shopping.products,
      stripeId: shopping.stripeId,
      total: shopping.total,
    };

    return bill;
  };

  public static getAllCheckoutSessions = async (
    email?: string,
    page?: number,
    perPage?: number,
    sort?: number,
  ) => {
    const response = await axios.get(
      `${shoppingUrl}/get-checkout-sessions/?email=${email}&pageNumber=${page}&perPage=${perPage}&sort=${sort}`,
      config,
    );

    const rawCheckoutSessions = response.data.data;
    let bills = [];
    for (const rawCheckoutSession of rawCheckoutSessions) {
      const customer = await getUserById(rawCheckoutSession.userId);
      const bill: IBill = {
        id: rawCheckoutSession._id,
        stripeId: rawCheckoutSession.stripeId,
        customer: customer.email,
        total: rawCheckoutSession.total,
        products: rawCheckoutSession.products,
        date: rawCheckoutSession.createdAt,
        paymentStatus: rawCheckoutSession.paymentStatus,
      };
      bills.push(bill);
    }

    return bills;
  };

  public static sendInvoice = async (userId: string, shoppingId: string) => {
    const response = await axios.post(
      `${shoppingUrl}/send-invoice`,
      { userId, shoppingId },
      config,
    );
    return response.data.statusCode;
  };
}
