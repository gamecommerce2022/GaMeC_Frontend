import axios from 'axios';
import { Product } from '../model/product_model';
import { productUrl } from '../services/url';

export const getProductPrice: (price: number) => string = function (price: number): string {
  let strPrice: string = '';
  price = parseFloat(price.toFixed(2));
  if (price === 1000000) {
    return '1,000,000';
  }
  let num: number = ~~(price / 1000000);
  if (num > 0) {
    strPrice = strPrice + num + ',';
    price = price - num * 1000000;
    num = ~~(price / 1000);
  } else {
    num = ~~(price / 1000);
  }
  if (num > 0) {
    strPrice = strPrice + num + ',';
    price = price - num * 1000;
  }
  if (price === 0) {
    strPrice = strPrice + '000';
  } else if (price < 100) {
    strPrice = strPrice + `0${price}`;
  } else {
    strPrice = strPrice + price;
  }
  return strPrice;
};

export const discountCalc = (disc = 0, price: number) => +(price - price * disc).toFixed(2);

export const withCurrency = (price: number) =>
  `${price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}`;

export const getScoreColor = (score: number) => {
  if (score > 90) return 'ring-2 ring-white';
  if (score > 80) return 'ring-2 ring-gray-200';
  if (score > 70) return 'ring-2 ring-gray-300 ';
  if (score > 60) return 'ring-2 ring-gray-500 ';
  if (score > 50) return 'ring-2 ring-gray-600 ';
  return 'ring-2 ring-gray-700 ';
  //   if (score > 20) return 'ring-2 ring-red-300'
};
export const getPaymentStatusColor = (paymentStatus: string) => {
  switch (paymentStatus) {
    case 'success':
      return 'text-green-600';
    case 'pending':
      return 'text-yellow-600';
    case 'error':
      return 'text-red-600';
    default:
      return 'text-gray-600';
  }
};

export class ProductUtils {
  public static getProductById = async (productId: string) => {
    const result = await axios.get(`${productUrl}/get/${productId}`);
    const rawProduct = result.data.product;
    const product: Product = {
      id: rawProduct._id,
      description: rawProduct.description,
      discount: rawProduct.discount,
      imageList: rawProduct.imageList,
      countBuy: rawProduct.countBuy,
      maxPlayer: rawProduct.maxPlayer,
      note: rawProduct.note,
      platform: rawProduct.platform,
      price: rawProduct.price,
      releaseDate: rawProduct.releaseDate,
      shortDescription: rawProduct.shortDescription,
      status: rawProduct.status,
      tags: rawProduct.tags,
      title: rawProduct.title,
      type: rawProduct.type,
      videoList: rawProduct.videoList,
      total: rawProduct.total,
      countBuy: rawProduct.countBuy,
    };
    return product;
  };
  public static getProducts = async (productsId: string[]) => {
    let products: Product[] = [];
    for (const id of productsId) {
      const product = await this.getProductById(id);
      products.push(product);
    }
    return products;
  };
}
