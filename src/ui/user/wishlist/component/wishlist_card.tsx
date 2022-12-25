import dateFormat from 'dateformat';
import { Price } from '../../browser/product/component/price';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { updateUserProduct } from '../../../../services/user/getProduct';
import { NavigateFunction } from 'react-router-dom';

export interface IWishlistCardProps {
  id: string;
  title: string;
  price: number;
  discount: number;
  imageUrl: string;
  realeaseDate: string;
  date: string;
  navigation: NavigateFunction;
}

export const WishlistCard = ({
  id,
  title,
  price,
  discount,
  imageUrl,
  date,
  navigation,
}: IWishlistCardProps) => {
  return (
    <div className="relative grid grid-cols-3 p-2 bg-gray-800 rounded group">
      <img
        src={imageUrl}
        className="object-cover w-full h-full col-span-1 rounded-sm cursor-pointer filter group-hover:brightness-125"
        alt=""
      />

      <div className="flex flex-col flex-grow col-span-2 pt-2 pl-3">
        <p className="w-full text-lg line-clamp-1 text-white">{title}</p>

        {/* <div className='mt-2 text-xs text-gray-400 line-clamp-2'>
              <span className='max-w-sm line-clamp-2'>{review}</span>
            </div> */}
        <div className="mt-3">
          <Price price={price} discount={discount} />
        </div>

        <div className="mt-auto">
          <button
            type="button"
            className="w-full px-4 py-2 mt-2 text-xs border-t border-gray-700  hover:bg-primary-600 group-hover:bg-primary rounded"
            onClick={() => {}}
          >
            Add to cart
          </button>
        </div>
      </div>
      <button
        type="button"
        className="absolute top-0 right-0 z-10 bg-transparent"
        onClick={() => {
          updateUserProduct({ produtId: id, status: 'REMOVED_FROM_WISHLIST', navigation });
        }}
      >
        <XMarkIcon className="w-8 h-8 p-2 text-red-500 bg-transparent hover:text-red-200 " />
      </button>
    </div>
  );
};
