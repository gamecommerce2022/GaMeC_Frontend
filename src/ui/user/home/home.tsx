import Slider from 'react-slick';
import GameCard from './component/game_card';
import CarouselCard from './component/carousel_card';
import { carouselData } from '../../../data/CarouselData';
import { dataDigitalBestSeller } from '../../../data/Data';
export const HomePage = () => {
  const customPagingSetting = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    initialSlide: 0,
    arrows: false,
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="m-6">
      <div className="text-2xl text-white">FEATURED & RECOMMENDED</div>
      <Slider {...customPagingSetting}>
        {carouselData.map((item) => (
          <CarouselCard {...item} />
        ))}
      </Slider>
      <div className="text-2xl text-white mt-20">Halloween Spotlight</div>

      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <GameCard {...item} />
        ))}
      </Slider>

      <div className="text-2xl text-white">Most Popular</div>
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <GameCard {...item} />
        ))}
      </Slider>

      <div className="text-2xl text-white">Game with Achievements</div>
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <GameCard {...item} />
        ))}
      </Slider>

      <div className="text-2xl text-white">Recently Updated</div>
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <GameCard {...item} />
        ))}
      </Slider>

      <div className="text-2xl text-white">New on GameC</div>
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <GameCard {...item} />
        ))}
      </Slider>
    </div>
  );
};
