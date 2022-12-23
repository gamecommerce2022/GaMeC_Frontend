import { useEffect, useState } from 'react';
import { Product } from '../../../../model/product_model';

const CarouselCard = (product: Product) => {
  const [images, setImages] = useState<string[]>();
  useEffect(() => {
    return () => {
      setImages(product.imageList?.splice(0, 4));
    };
  }, []);

  const [currentThumbnail, setCurrentThumbnail] = useState(product.imageList![0] ?? '');
  const realPrice =
    product.price * (product.discount == null ? 1 : product.discount === 0 ? 1 : product.discount);
  const discount = product.discount === null ? 0 : product.discount! * 100;
  return (
    <div className="flex flex-row cursor-pointer">
      <img
        className="rounded-md w-3/5 transition duration-1000 h-[800px]"
        src={currentThumbnail}
        alt=""
      />
      <div className="w-2/5 ml-4 flex flex-col">
        <p className="text-white text-2xl">{product.title}</p>
        <div className="grid grid-cols-2 gap-2">
          {images?.map((image: any) => (
            <img
              onMouseEnter={() => setCurrentThumbnail(image)}
              onMouseLeave={() => setCurrentThumbnail(product.imageList![0])}
              className="w-full h-full transition duration-300 filter brightness-50 hover:brightness-100 object-cover"
              alt=""
              src={image}
            />
          ))}
        </div>
        <p className="text-white text-2xl">Now Available</p>

        <div className="flex">
          <span className="bg-blue-gray-500 rounded-sm text-white px-1 mb-2">Top Seller</span>
        </div>

        <div className="flex-grow"></div>
        {realPrice !== product.price ? (
          <div className="flex">
            {discount !== 0 ? (
              <span className="text-green-banana bg-green-dark font-semibold px-1">
                -{discount}%
              </span>
            ) : (
              <span className="text-green-banana bg-green-dark font-semibold px-1"></span>
            )}
            <span className="bg-gray-dark">
              <span className="text-gray-600 line-through pl-1">
                {product.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
              </span>
              <span className="text-green-banana no-underline px-1">
                {realPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
              </span>
            </span>
          </div>
        ) : (
          <div className="flex">
            <span className="bg-gray-dark">
              <span className="text-white pl-1">
                {realPrice !== 0
                  ? realPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
                  : 'Free to play'}
              </span>
              {/* <span className="text-green-banana no-underline px-1">{realPrice}</span>
            <p className="text-white text-xs">{realPrice !== 0 ? realPrice : 'Free to play'}</p> */}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
export default CarouselCard;
