import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Button, Tooltip } from 'flowbite-react';
import { GenreItem } from './genre_item';
import { useRef } from 'react';

import GenreImage from '../../../../../assets/games/CyberPunk2077.png';
import Slider from 'react-slick';
import { settings } from '../../../../../config/carousel_setting';

export const PopularGenres: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  return (
    <div className="flex flex-col space-y-2">
      {/** Popular Genre + 2 button */}
      <div className="flex flex-row space-x-4">
        <h4 className="flex-none flex items-center justify-center">
          <div className="text-white">Popular Genres</div>
        </h4>
        <div className="grow" />
        <Tooltip content="Previous">
          <Button
            onClick={() => {
              sliderRef.current?.slickPrev();
            }}
            className="flex items-center justify-center"
          >
            <ChevronLeftIcon className="w-4 h-" />
          </Button>
        </Tooltip>
        <Tooltip content="Next">
          <Button
            onClick={() => {
              sliderRef.current?.slickNext();
            }}
            className="flex items-center justify-center"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </Button>
        </Tooltip>
      </div>

      {/** Carousel Genre */}
      <div className="space-x-5">
        <Slider ref={sliderRef} {...settings}>
          {Array(20)
            .fill('Slider')
            .map((item) => {
              return <GenreItem id={'a'} name={'Laptop / PC'} img={GenreImage} />;
            })}
        </Slider>
      </div>
    </div>
  );
};
