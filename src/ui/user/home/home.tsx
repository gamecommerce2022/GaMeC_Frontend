import Slider from 'react-slick';
import GameCard from './component/game_card';
import CarouselCard from './component/carousel_card';
import { useEffect, useState } from 'react';
import { settings, singleSettings } from '../../../config/carousel_setting';
import axios from 'axios';
import { Product } from '../../../model/product_model';
export const HomePage = () => {
  const [products, setProducts] = useState<Product[]>();
  useEffect(() => {
    let results = new Array<Product>();
    const getProductData = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/products?page=0&perPage=10&q&sort=1`,
      );
      result.data.products.forEach((product: any) => {
        const result: Product = {
          id: product._id,
          title: product.title,
          type: product.type,
          releaseDate: product.releaseDate,
          platform: product.platform,
          maxPlayer: product.maxPlayer,
          total: product.total,
          status: product.status,
          discount: product.discount,
          price: product.price,
          shortDescription: product.shortDescription,
          note: product.note,
          tags: product.tags,
          imageList: product.imageList,
          videoList: product.videoList,
          description: product.description,
        };
        results.push(result);
      });
      setProducts(results);
    };
    getProductData();
  }, []);

  return (
    <div className="m-6">
      <div className="text-2xl text-white">FEATURED & RECOMMENDED</div>
      <Slider {...singleSettings}>
        {products?.map((product) => (
          <CarouselCard {...product} />
        ))}
      </Slider>
      <div className="text-2xl text-white mt-20">Halloween Spotlight</div>

      <Slider {...settings}>
        {products?.map((product) => (
          <GameCard {...product} />
        ))}
      </Slider>

      <div className="text-2xl text-white">Most Popular</div>
      <Slider {...settings}>
        {products?.map((product) => (
          <GameCard {...product} />
        ))}
      </Slider>

      <div className="text-2xl text-white">Game with Achievements</div>
      <Slider {...settings}>
        {products?.map((product) => (
          <GameCard {...product} />
        ))}
      </Slider>

      <div className="text-2xl text-white">Recently Updated</div>
      <Slider {...settings}>
        {products?.map((product) => (
          <GameCard {...product} />
        ))}
      </Slider>

      <div className="text-2xl text-white">New on GameC</div>
      <Slider {...settings}>
        {products?.map((product) => (
          <GameCard {...product} />
        ))}
      </Slider>
    </div>
  );
};
