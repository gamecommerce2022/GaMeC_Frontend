export const getProductPrice: (price: number) => string = function (
 price: number
): string {
 let strPrice: string = "";
 price = parseFloat(price.toFixed(2))
 if (price === 1000000) {
  return '1,000,000';
 }
 let num: number = ~~(price / 1000000);
 if (num > 0) {
  strPrice = strPrice + num + ",";
  price = price - num * 1000000;
  num = ~~(price / 1000);
 } else {
  num = ~~(price / 1000);
 }
 if (num > 0) {
  strPrice = strPrice + num + ",";
  price = price - num * 1000;
 }
 if (price === 0) {
  strPrice = strPrice + "000";
 } else if (price < 100) {
  strPrice = strPrice + `0${price}`;
 } else {
  strPrice = strPrice + price;
 }
 return strPrice;
};

export const discountCalc = (disc = 0, price: number) =>
 +(price - (price * disc) / 100).toFixed(2);

export const withCurrency = (price: number) => `đ${price.toFixed(2)}`;

export const getScoreColor = (score: number) => {
 if (score > 90) return "ring-2 ring-white";
 if (score > 80) return "ring-2 ring-gray-200";
 if (score > 70) return "ring-2 ring-gray-300 ";
 if (score > 60) return "ring-2 ring-gray-500 ";
 if (score > 50) return "ring-2 ring-gray-600 ";
 return "ring-2 ring-gray-700 ";
 //   if (score > 20) return 'ring-2 ring-red-300'
};
