import { useRef, useState } from "react";
import Slider from "react-slick";
import { settings } from "../../../../../config/carousel_setting";

export const ProductImage: React.FC<{ images: string[] }> = ({ images }) => {
    const sliderRef = useRef<Slider>(null);
    const [img, setImg] = useState(images.at(0));

    const Card: React.FC<{ image: string }> = ({ image }) => {
        return <div className="mt-6 bg-black aspect-w-4 aspect-h-3" onClick={() => setImg(image)}>
            <img
                className="object-cover w-full h-full rounded-sm"
                src={image}
                alt={image}
            />
        </div>;
    };

    return (
        <div className="space-x-5">
            <div className="mt-6 bg-black aspect-w-2 aspect-h-1">
                <img
                    className="object-fill w-full h-full rounded"
                    src={img}
                    alt={img}
                />
            </div>
            <Slider ref={sliderRef} {...settings}>
                {images.map(image => {
                    return <Card image={image} />
                })}
            </Slider>
        </div>
    )
}

