export function getProductPrice(price: number) {
 let strPrice: string = '';
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
}

export const discountCalc = (disc = 0, price: number) =>
 +(price - (price * disc) / 100).toFixed(2)

export const withCurrency = (price: number) => `đ${price.toFixed(2)}`

export const getScoreColor = (score: number) => {
 if (score > 90) return 'border-2 border-white'
 if (score > 80) return 'border-2 border-gray-200'
 if (score > 70) return 'border-2 border-gray-300 '
 if (score > 60) return 'border-2 border-gray-500 '
 if (score > 50) return 'border-2 border-gray-600 '
 return 'border-2 border-gray-700 '
 //   if (score > 20) return 'border-2 border-red-300'
}