import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../../../model/product_model';

const CarouselCard = (props: { product: Product }) => {
  const [images, setImages] = useState<string[]>();
  const navigate = useNavigate();
  useEffect(() => {
    return () => {
      console.log('image list');
      console.log(props.product.title);

      if (props.product.imageList.length < 4) {
        setImages(props.product.imageList);
      } else {
        setImages(props.product.imageList?.slice(0, 4));
      }
      console.log(images);
    };
  }, [props.product.imageList, props.product.title]);

  const [currentThumbnail, setCurrentThumbnail] = useState(props.product.imageList[0]);
  const realPrice =
    props.product.price *
    (props.product.discount == null
      ? 1
      : props.product.discount === 0
      ? 1
      : props.product.discount);
  const discount = props.product.discount === null ? 0 : props.product.discount! * 100;
  return (
    <a href={`http://localhost:3000/user/products/${props.product.id}`}>
      <div
        className="flex flex-row cursor-pointer"
        onClick={() => {
          navigate(`/user/products/${props.product.id}`);
        }}
      >
        <img
          className="rounded-md w-3/5 transition duration-1000 h-[800px]"
          src={currentThumbnail}
          alt=""
        />
        <div className="w-2/5 ml-4 flex flex-col">
          <p className="text-white text-2xl">{props.product.title}</p>
          <div className="grid grid-cols-2 gap-2">
            {images?.map((image: any) => (
              <div
                className="mt-6 bg-black aspect-w-2 aspect-h-2 mx-3 transition duration-300 filter brightness-50 hover:brightness-100"
                onMouseEnter={() => setCurrentThumbnail(image)}
                onMouseLeave={() => setCurrentThumbnail(props.product.imageList![0])}
              >
                <img className="object-fill w-full h-full rounded-sm" src={image} alt={image} />
              </div>
              // <img
              //   onMouseEnter={() => setCurrentThumbnail(image)}
              //   onMouseLeave={() => setCurrentThumbnail(props.product.imageList![0])}
              //   className="w-full h-full transition duration-300 filter brightness-50 hover:brightness-100 object-cover"
              //   alt=""
              //   src={image}
              // />
            ))}
          </div>
          <p className="text-white text-2xl">Now Available</p>

          <div className="flex">
            <span className="bg-blue-gray-500 rounded-sm text-white px-1 mb-2">Top Seller</span>
          </div>

          <div className="flex-grow"></div>
          {realPrice !== props.product.price ? (
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
                  {props.product.price.toLocaleString('it-IT', {
                    style: 'currency',
                    currency: 'VND',
                  })}
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
    </a>
  );
};
export default CarouselCard;
