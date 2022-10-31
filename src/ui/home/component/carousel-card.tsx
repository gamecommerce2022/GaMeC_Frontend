const CarouselCard = (item: {
  id: number;
  title: string;
  originalPrice: number;
  discountPercent: number;
  category: string;
  thumbnailUrl: string;
  subThumbnails: string[];
}) => {
  return (
    <div className="flex flex-row">
      <img className="w-2/3 rounded-md" src={item.thumbnailUrl} alt="" />
      <div className="flex flex-col ml-2">
        <p className="text-white text-2xl">{item.title}</p>
        <div className="grid grid-cols-2 gap-2">
          {item.subThumbnails.map((subThumbnail) => (
            <img alt="" src={subThumbnail} />
          ))}
        </div>
        <p className="text-white text-2xl">Now Available</p>
        <div className="additional">
          <div className="text-white">Top Seller</div>
        </div>
        <div className="flex-grow"></div>
        <p className="text-white text-xs">{item.originalPrice}</p>
      </div>
    </div>
  );
};
export default CarouselCard;
