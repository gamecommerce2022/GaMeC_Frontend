import { Product } from '../../../../../model/product_model';
import { Price } from '../../../browser/product/component/price';
import { XMarkIcon } from '@heroicons/react/24/outline';

export interface ICartCardProps {
  product: Product;
  classes?: string;
}

export const CartCard = ({ product, classes }: ICartCardProps) => {
  return (
    <div className={`flex relative items-start bg-gray-800 shadow-lg rounded h-24  ${classes}`}>
      <img src={product.imageList![0]} alt="" className="object-cover w-16 h-full mr-2 rounded-l" />

      <div className="p-2 mr-2 text-sm text-gray-200">
        <div>{product.title}</div>
        <Price price={product.price} discount={product.discount} classes="ml-auto mt-2" />
      </div>

      <button
        type="button"
        className="absolute top-0 right-0 ml-auto"
        aria-label="close"
        onClick={() => {}}
      >
        <XMarkIcon className="w-8 h-8 p-1 text-gray-400" />
      </button>
    </div>
  );
};
