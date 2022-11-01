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
  return (
    <div className="flex flex-row">
      <img
        className="rounded-md w-3/5 h-full object-fill"
        src={currentThumbnail}
        alt=""
      />
      <div className="w-2/5 ml-4 flex flex-col">
        <p className="text-white text-2xl">{item.title}</p>
        <div className="grid grid-cols-2 gap-2">
          {item.subThumbnails.map((subThumbnail) => (
            <img
              onClick={() => setCurrentThumbnail(subThumbnail)}
              className="w-4/5 bg-blend-lighten hover:bg-blend-darken"
              alt=""
              src={subThumbnail}
            />
          ))}
        </div>
        <p className="text-white text-2xl">Now Available</p>

        <div className="flex">
          <span className="bg-blue-gray-500 rounded-sm text-white">
            Top Seller
          </span>
        </div>

        <div className="flex-grow"></div>
        <p className="text-white text-xs">{item.originalPrice}</p>
      </div>
    </div>
  );
};
export default CarouselCard;
