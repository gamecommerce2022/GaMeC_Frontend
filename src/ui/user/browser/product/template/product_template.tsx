import { Link, Navigate } from 'react-router-dom'
import { ProductCard, ProductFeatureBox, ProductReviewSection, ProductSpecifications } from "../component"
import { ReactComponent as FacebookIcon } from '../../../../../assets/images/facebook.svg'
import { ReactComponent as TwitterIcon } from '../../../../../assets/images/twitter.svg'
import { ReactComponent as DiscordIcon } from '../../../../../assets/images/discord.svg'
import { ReactComponent as InstagramIcon } from '../../../../../assets/images/instagram.svg'
import { reviews } from "../../../../../utils/data"
import { getRandomNumber } from "../../../../../utils"
import { Product } from '../../../../../model/product'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper';
import SwiperCore from "swiper";
import { useRef } from 'react'

export interface IGamePageTemplateProps {
 product: Product | null
 similarProduct: Product[]
}
export const ProductPageTemplate = ({ product, similarProduct }: IGamePageTemplateProps) => {
 const swiperRef = useRef<SwiperCore>();
 if (!product) <Navigate to="/404" />
 return (
  <div className='mx-40'>
   {product && (
    <div>
     <div className='my-3 text-4xl text-gray-100'>{product.title}</div>
     <div className='grid grid-cols-1 gap-10 md:grid-cols-3'>
      <div className='order-2 md:col-span-2 md:order-1'>


       <Swiper
        onBeforeInit={(swiper) => {
         swiperRef.current = swiper;
        }}
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        slidesPerView={1}
        spaceBetween={20}
       >
        {Array(20).fill('Slider').map((item) => {
         return (<SwiperSlide>
          <div className='mt-6 bg-black aspect-w-16 aspect-h-9'>
           <img
            className='object-cover w-full h-full'
            src={product.imageUrl}
            alt={product.imageUrl}
           />
          </div>
         </SwiperSlide>);
        })}

       </Swiper>

       <div className='my-4 text-lg'>{product.description}</div>
       <div className='grid grid-cols-2 my-4'>
        <ProductFeatureBox
         title='Genres'
         value={product.tags.join(', ')}
        />
        <ProductFeatureBox title='Features' value='-' />
        <ProductFeatureBox
         title='Platforms'
         value={product.platform.join(', ')}
        />
       </div>
       <div className='my-6'>
        {product.longDesc?.map((item) => (
         <div
          key={item}
          className={`mb-2 text-gray-400 ${item.length < 80
           ? 'mt-4 font-semibold'
           : 'text-sm'
           }`}
         >
          {item}
         </div>
        ))}
       </div>
       <div className='my-6'>
        <div className='text-xl text-gray-200'>Follow us</div>
        <div className='flex justify-center p-6 mt-2 space-x-10 bg-gray-800'>
         <Link to='/to'>
          <FacebookIcon className='w-6 h-6 text-gray-400 hover:text-gray-50' />
         </Link>
         <Link to='/to'>
          <TwitterIcon className='w-6 h-6 text-gray-400 hover:text-gray-50' />
         </Link>
         <Link to='/to'>
          <DiscordIcon className='w-6 h-6 text-gray-400 hover:text-gray-50' />
         </Link>
         <Link to='/to'>
          <InstagramIcon className='w-6 h-6 text-gray-400 hover:text-gray-50' />
         </Link>
        </div>
       </div>
       <div className='my-6'>
        <div className='text-xl text-gray-200'>ProductSpecifications</div>
        <ProductSpecifications />
       </div>
       <div className='my-6'>
        <div className='text-xl font-semibold text-gray-200'>Reviews</div>
        <ProductReviewSection
         averageRating={getRandomNumber(0, 100)}
         count={getRandomNumber(3, 20000)}
         reviews={reviews}
        />
       </div>
      </div>
      <div className='order-1 col-span-1 md:order-2'>
       <div className='sticky top-24'>
        <ProductCard product={product} />
       </div>
      </div>
     </div>
    </div>
   )
   }
  </div >
 )
}
