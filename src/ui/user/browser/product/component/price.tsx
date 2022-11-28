import { ProductNotes } from '../../../../../model/product/product';
import { discountCalc, withCurrency } from '../../../../../utils/product_utils';

export interface IPriceProps {
  priceOffical: number;
  priceDefault: number;
  discount?: number;
  classes?: string;
}

export const Discounted = ({ discount, priceOffical, priceDefault }: IPriceProps) => (
  <>
    <span className={`px-1 py-0.5 mr-2 bg-green-700 text-white rounded-sm`}>
      -{(discount as number) * 100}%
    </span>
    <span className="mr-2 text-gray-400 line-through">{withCurrency(priceDefault)}</span>
    <span className="">{withCurrency(priceOffical)}</span>
  </>
);

export const Price = ({ priceDefault, discount, priceOffical, classes }: IPriceProps) => {
  const CreatePrice = () => {
    if (discount)
      return (
        <Discounted discount={discount} priceDefault={priceDefault} priceOffical={priceOffical} />
      );
    return withCurrency(priceOffical);
  };

  return <div className={`text-sm lg:text-base text-gray-200 ${classes}`}>{CreatePrice()}</div>;
};
