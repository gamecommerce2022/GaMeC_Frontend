const GameCard = (item: {
  id: number;
  price: string;
  linkImg: string;
  title: string;
}) => (
  <div className="mr-10">
    <img className="w-full h-full" src={item.linkImg} alt={item.title} />
    <div className="text-gray-500">Base game</div>
    <div>
      <h1 className="text-white text-xl">{item.title}</h1>
    </div>
    <div className="flex flex-row justify-between items-center">
      <span className="text-white bg-blue-700 rounded-lg">
        <p className="m-2 text-base">-60%</p>
      </span>
      <div>
        <div className="text-gray-500 line-through text-base">{item.price}</div>
        <h3 className="text-white text-base">{item.price}</h3>
      </div>
    </div>
  </div>
);
export default GameCard;
