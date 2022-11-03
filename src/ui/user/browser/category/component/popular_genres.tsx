import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
<<<<<<< HEAD
import { Button, Tooltip, Typography } from 'antd';
=======
>>>>>>> GE-2
import { FreeMode } from 'swiper';
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { GenreItem } from './genre_item';
import { useRef } from 'react';

<<<<<<< HEAD
// import swipper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import GenreImage from '../../../../../assets/games/CyberPunk2077.png';
=======



import GenreImage from '../../../../../assets/games/CyberPunk2077.png';
import { IconButton, Tooltip, Typography } from '@material-tailwind/react';
>>>>>>> GE-2

export const PopularGenres: React.FC = () => {

 const swiperRef = useRef<SwiperCore>();

 return (<div className="flex flex-col space-y-2">
  {/** Popular Genre + 2 button */}
  <div className="flex flex-row space-x-4">
<<<<<<< HEAD
   <Typography.Title level={4} className='flex-none flex items-center justify-center'><div className="text-white">Popular Genres</div></Typography.Title>
   <div className="grow" />
   <Tooltip title="Previous">
    <Button shape="circle" ghost={true} onClick={() => { swiperRef.current?.slidePrev() }} className="flex items-center justify-center">
     <ChevronLeftIcon className="w-4 h-4" />
    </Button>
   </Tooltip>
   <Tooltip title="Next">
    <Button shape="circle" ghost={true} onClick={() => { swiperRef.current?.slideNext() }} className="flex items-center justify-center">
     <ChevronRightIcon className="w-4 h-4" />
    </Button>
=======
   <Typography variant="h4" className='flex-none flex items-center justify-center'><div className="text-white">Popular Genres</div></Typography>
   <div className="grow" />
   <Tooltip title="Previous">
    <IconButton variant="outlined" onClick={() => { swiperRef.current?.slidePrev() }} className="flex items-center justify-center">
     <ChevronLeftIcon className="w-4 h-4" />
    </IconButton>
   </Tooltip>
   <Tooltip title="Next">
    <IconButton variant="outlined" onClick={() => { swiperRef.current?.slideNext() }} className="flex items-center justify-center">
     <ChevronRightIcon className="w-4 h-4" />
    </IconButton>
>>>>>>> GE-2
   </Tooltip>
  </div>

  {/** Carousel Genre */}
  <div className='flex items-center justify-center space-x-5'>
   <Swiper
    onBeforeInit={(swiper) => {
     swiperRef.current = swiper;
    }}
    freeMode={true}
    grabCursor={true}
    modules={[FreeMode]}
    slidesPerView={5}
    spaceBetween={20}
   >
    {Array(20).fill('Slider').map((item) => {
     return (<SwiperSlide>
      <GenreItem id={'a'} name={'Laptop / PC'} img={GenreImage} />
     </SwiperSlide>);
    })}

   </Swiper>


  </div>
 </div>)
}