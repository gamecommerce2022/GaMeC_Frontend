import { useRef, useState } from "react";
import Slider from "react-slick";
import { settings } from "../../../../../config/carousel_setting";

export const ProductImage: React.FC<{ images: string[] }> = ({ images }) => {
  const sliderRef = useRef<Slider>(null);
  const [imgMain, setImgMain] = useState(images[0]);

  const Card: React.FC<{ image: string }> = ({ image }) => {
    return (
      <div
        className="mt-6 bg-black aspect-w-3 aspect-h-4"
        onClick={() => setImgMain(image)}
      >
        <img
          className="object-fill w-full h-full rounded-sm bg-white"
          src={image}
          alt={image}
        />
      </div>
    );
  };

  return (
    <div className="space-x-5">
      <div className="mt-6 bg-black aspect-w-4 aspect-h-3">
        <img
          className="object-fill w-full h-full rounded"
          src={imgMain}
          alt={imgMain}
        />
      </div>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image) => {
          return <Card image={image} />;
        })}
      </Slider>
    </div>
  );
};
