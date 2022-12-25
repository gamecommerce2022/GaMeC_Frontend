import { discountCalc, withCurrency } from '../../../../../utils/product_utils';

export interface IPriceProps {
  price: number;
  discount?: number;
  classes?: string;
}

export const Discounted = ({ discount, price }: IPriceProps) => (
  <div className="flex flex-row items-center gap-x-4">
    <div className={`px-1 py-0.5 mr-2 bg-green-700 text-white rounded-sm`}>
      -{(discount as number) * 100}%
    </div>
    <div>
      <div className="mr-2 text-gray-400 line-through">{withCurrency(price)}</div>
      <div className="">{withCurrency(discountCalc(discount, price))}</div>
    </div>
  </div>
);

export const Price = ({ price, discount, classes }: IPriceProps) => {
  const CreatePrice = () => {
    if (discount) return <Discounted discount={discount} price={price} />;
    return withCurrency(price);
  };

  return <div className={`text-sm lg:text-base text-gray-200 ${classes}`}>{CreatePrice()}</div>;
};
