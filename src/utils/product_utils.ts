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