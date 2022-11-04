export const settings = {
 infinite: true,
 speed: 500,
 slidesToShow: 5,
 slidesToScroll: 5,
 initialSlide: 0,
 arrows: false,
 responsive: [
  {
   breakpoint: 1280,
   settings: {
    slidesToShow: 4,
    slidesToScroll: 4,
   },
  },
  {
   breakpoint: 768,
   settings: {
    slidesToShow: 3,
    slidesToScroll: 3,
   },
  },
  {
   breakpoint: 640,
   settings: {
    slidesToShow: 2,
    slidesToScroll: 2,
   },
  },
 ],
};

export const singleSettings = {
 infinite: false,
 speed: 500,
 slidesToShow: 1,
 slidesToScroll: 1,
 initialSlide: 0,
 arrows: false,
};