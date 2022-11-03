const GameCard = (item: {
  id: number;
  price: string;
  linkImg: string;
  title: string;
}) => (
  <div className="card">
    <img className="img-item" src={item.linkImg} alt={item.title} />
    <div className="home-game-info">Base game</div>
    <div className="card-game-title">
      <h1>{item.title}</h1>
    </div>
    <div className="card-bottom">
      <div className="discounted-percent">-60%</div>
      <div className="discounted-price ">{item.price}</div>
      <h3 className="price">{item.price}</h3>
    </div>
  </div>
);
export default GameCard;
