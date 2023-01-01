import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { config } from '../services/config';

export class CheckoutUtils {
  public static getCheckoutUrl = async (products: string[]) => {
    let checkoutUrl;
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/shopping/checkout-session`,
        { products: products },
        config,
      )
      .then((res) => {
        checkoutUrl = res.data.session.url;
      });
    return checkoutUrl;
  };
}
