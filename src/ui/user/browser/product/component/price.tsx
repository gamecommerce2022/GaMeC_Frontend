import { ProductNotes } from '../../../../../model/product/product';
import { discountCalc, withCurrency } from '../../../../../utils/product_utils';

export interface IPriceProps {
  price: number;
  discount?: number;
  classes?: string;
  notes?: ProductNotes[];
  comingSoon?: boolean;
}

export const Discounted = ({ discount, price, notes }: IPriceProps) => (
  <>
    <span
      className={`px-1 py-0.5 mr-2 ${
        notes?.includes('HIGHEST_DISCOUNT') ? 'bg-primary text-white' : 'bg-green-700 text-white'
      }  rounded-sm`}
    >
      -{(discount as number) * 100}%
    </span>
    <span className="mr-2 text-gray-400 line-through">{withCurrency(price)}</span>
    <span className="">{withCurrency(discountCalc(discount, price))}</span>
  </>
);

export const Price = ({ price, discount, comingSoon, notes, classes }: IPriceProps) => {
  const CreatePrice = () => {
    if (comingSoon) return <>Coming Soon</>;
    if (price === 0) return <div>Free</div>;

    if (price) {
      if (discount) return <Discounted discount={discount} price={price} notes={notes} />;
      return withCurrency(price);
    }

    return 0;
  };

  return <div className={`text-sm lg:text-base text-gray-200 ${classes}`}>{CreatePrice()}</div>;
};
