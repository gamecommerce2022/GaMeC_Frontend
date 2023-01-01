import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as FreeSolidIcon from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../../../model/product_model';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

const GameCard = (product: Product) => {
  const realPrice = product.price * (product.discount! !== 0 ? (1 - product.discount!) : 1);
  const navigate = useNavigate();
  return (
    <div
      className="mr-10 cursor-pointer group h-[380px] flex flex-col"
      onClick={() => {
        navigate(`/user/products/${product.id}`);
      }}
    >
      <div className="relative">
        <img
          className="w-full h-[150px] rounded brightness-90 hover:brightness-100"
          src={product.imageList![0]}
          alt={product.title}
        />

        <FontAwesomeIcon
          title="Add to wishlist"
          onClick={() => {
            const accessToken = new Cookies().get('accessToken');
            if (!accessToken) {
              navigate('/signin');
            }
          }}
          className="absolute invisible mt-1 mr-1 top-0 right-0 group-hover:visible cursor-pointer "
          icon={FreeSolidIcon.faCirclePlus}
          size="xl"
        />
      </div>
      <div className="text-gray-500">Base game</div>
      <div>
        <h1 className="text-white text-xl">{product.title}</h1>
      </div>
      <div className="flex-grow"></div>

      <div className="flex flex-row justify-between items-center">
        {product.discount !== 0 ? (
          <span className="text-white bg-blue-700 rounded-lg">
            <p className="m-2 text-base">{product.discount! * 100}%</p>
          </span>
        ) : (
          <p></p>
        )}
        <div>
          {realPrice !== product.price ? (
            <div className="text-gray-500 line-through text-base">
              {product.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
            </div>
          ) : (
            <div></div>
          )}
          <h3 className="text-white text-base">
            {realPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
          </h3>
        </div>
      </div>
    </div>
  );
};
export default GameCard;
