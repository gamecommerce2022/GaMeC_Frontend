import { discountCalc, withCurrency } from '../../../../../utils/product_utils';

export interface IPriceProps {
  price: number;
  discount?: number;
  classes?: string;
}

export const Discounted = ({ discount, price }: IPriceProps) => (
  <>
    <span className={`px-1 py-0.5 mr-2 bg-green-700 text-white rounded-sm`}>
      -{(discount as number) * 100}%
    </span>
    <span className="mr-2 text-gray-400 line-through">{withCurrency(price)}</span>
    <span className="">{withCurrency(discountCalc(discount, price))}</span>
  </>
);

export const Price = ({ price, discount, classes }: IPriceProps) => {
  const CreatePrice = () => {
    if (discount) return <Discounted discount={discount} price={price} />;
    return withCurrency(price);
  };

  return <div className={`text-sm lg:text-base text-gray-200 ${classes}`}>{CreatePrice()}</div>;
};
