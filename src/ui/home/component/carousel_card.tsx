import { useState } from "react";

const CarouselCard = (item: {
  id: number;
  title: string;
  originalPrice: number;
  discountPercent: number;
  category: string;
  thumbnailUrl: string;
  subThumbnails: string[];
}) => {
  const [currentThumbnail, setCurrentThumbnail] = useState(item.thumbnailUrl);
  const realPrice = (item.originalPrice * (100 - item.discountPercent)) / 100;
  return (
    <div className="flex flex-row cursor-pointer h-[32rem]">
      <img
        className="rounded-md w-3/5 transition duration-1000 h-"
        src={currentThumbnail}
        alt=""
      />
      <div className="w-2/5 ml-4 flex flex-col">
        <p className="text-white text-2xl">{item.title}</p>
        <div className="grid grid-cols-2 gap-2">
          {item.subThumbnails.map((subThumbnail) => (
            <img
              onMouseEnter={() => setCurrentThumbnail(subThumbnail)}
              onMouseLeave={() => setCurrentThumbnail(item.thumbnailUrl)}
              className="w-full transition duration-300 filter brightness-50 hover:brightness-100"
              alt=""
              src={subThumbnail}
            />
          ))}
        </div>
        <p className="text-white text-2xl">Now Available</p>

        <div className="flex">
          <span className="bg-blue-gray-500 rounded-sm text-white px-1 mb-2">
            Top Seller
          </span>
        </div>

        <div className="flex-grow"></div>
        {realPrice !== item.originalPrice ? (
          <div className="flex">
            <span className="text-green-banana bg-green-dark font-semibold px-1">
              -{item.discountPercent}%
            </span>

            <span className="bg-gray-dark">
              <span className="text-gray-600 line-through pl-1">
                {item.originalPrice}
              </span>
              <span className="text-green-banana no-underline px-1">
                {realPrice}
              </span>
            </span>
          </div>
        ) : (
          <p className="text-white text-xs">
            {realPrice !== 0 ? realPrice : "Free to play"}
          </p>
        )}
      </div>
    </div>
  );
};
export default CarouselCard;
