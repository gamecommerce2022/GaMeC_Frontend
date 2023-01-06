import Slider from 'react-slick';
import GameCard from './component/game_card';
import CarouselCard from './component/carousel_card';
import { useEffect, useState } from 'react';
import { settings, singleSettings } from '../../../config/carousel_setting';
import { Product } from '../../../model/product_model';
import * as ProductService from '../../../services/product/product';
import { ProductUtils } from '../../../utils/product_utils';
export const HomePage = () => {
  const [productCarousel, setProductCarousel] = useState<Product[]>([]);
  const [productFeature, setProductFeature] = useState<Product[]>([]);
  const [productRecent, setProductRecent] = useState<Product[]>([]);
  const [productNew, setProductNew] = useState<Product[]>([]);

  useEffect(() => {
    const get = async () => {
      ProductUtils.getFeatureAndRecommendedProduct().then((products) =>
        setProductCarousel(products),
      );
      ProductService.getRandomProduct().then((products) => setProductFeature(products));
      ProductService.getRandomProduct().then((products) => setProductRecent(products));
      ProductService.getRandomProduct().then((products) => setProductNew(products));
    };
    get();
  }, []);

  return (
    <div className="m-6">
      <div className="text-2xl text-white">FEATURED & RECOMMENDED</div>
      <Slider {...singleSettings}>
        {productCarousel.map((product) => (
          <CarouselCard product={product} />
        ))}
      </Slider>
      {/* <div className="text-2xl text-white mt-20">Halloween Spotlight</div>

      <Slider {...settings}>
        {products?.map((product) => (
          <GameCard {...product} />
        ))}
      </Slider> */}

      <div className="text-2xl text-white">Most Popular</div>
      <Slider {...settings}>
        {productFeature.map((product) => (
          <GameCard {...product} />
        ))}
      </Slider>

      {/* <div className="text-2xl text-white">Game with Achievements</div>
      <Slider {...settings}>
        {products?.map((product) => (
          <GameCard {...product} />
        ))}
      </Slider> */}

      <div className="text-2xl text-white">Recently Updated</div>
      <Slider {...settings}>
        {productRecent.map((product) => (
          <GameCard {...product} />
        ))}
      </Slider>

      <div className="text-2xl text-white">New on GameC</div>
      <Slider {...settings}>
        {productNew.map((product) => (
          <GameCard {...product} />
        ))}
      </Slider>
    </div>
  );
};
