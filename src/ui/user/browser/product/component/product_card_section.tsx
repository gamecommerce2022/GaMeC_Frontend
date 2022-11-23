import { Link } from 'react-router-dom';
import { Product } from '../../../../../model/product/product';

export interface IProductCardSection {
  heading: string;
  buttonText?: string;
  buttonLinkTo?: string;
  products: Product[];
  classes?: string;
}

export const ProductCardSection = ({
  heading,
  buttonText = 'view more',
  buttonLinkTo = '#0',
  products,
  classes = 'text-white',
}: IProductCardSection) => {
  const productsSix = products.slice(0, 6);
  return (
    <div className={`mt-6 mb-12 ${classes}`}>
      <div className="flex items-baseline justify-between">
        <div className="flex items-center text-xl font-semibold capitalize">{heading}</div>
        {buttonText && (
          <Link
            to={buttonLinkTo}
            className="text-xs uppercase border border-white rounded-md btn-md "
            aria-label={`view more ${heading}`}
          >
            {buttonText}
          </Link>
        )}
      </div>
      <div
        data-testid={`${heading}`}
        className="flex gap-4 pt-3 pb-3 overflow-x-scroll overscroll-x-none thin-scrollbar"
      >
        {productsSix.map((product) => (
          <div></div>
        ))}
      </div>
    </div>
  );
};
