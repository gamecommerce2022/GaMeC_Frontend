import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { BannerAdsProp } from "../../../application/home/banner_ads_props";

const BannerAds: React.FC<BannerAdsProp> = (props) => {
 const bannerAds = props;
 return (<div key={bannerAds.id} className="relative overflow-hidden bg-gray-900 pointer-events-none h-full" style={{ backgroundImage: `url('https://source.unsplash.com/random/1920x1080/?black')` }}>
  <div className="pt-16 pb-32 sm:pt-24 sm:pb-24 lg:pt-24 lg:pb-24">
   <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-2 flex flex-row items-center">

    {/* Decorative image grid */}
    <div
     aria-hidden="true"
     className="pointer-events-non lg:inset-y-0 lg:max-w-4xl"
    >
     <div className="w-3/4 h-3/4 scale-125">
      <div className="flex items-center space-x-2">
       <img
        className="h-full w-full rounded-xl"
        src={bannerAds.image}
        alt={bannerAds.title}
       />
      </div>
     </div>
    </div>

    <div className="sm:max-w-lg">
     <h1 className="font text-4xl font-bold tracking-tight text-indigo-700 sm:text-3xl">
      {bannerAds.title}
     </h1>
     <p className="mt-4 text-xl text-gray-100">
      {bannerAds.descriptions.map((description: string) =>
       <div className='inline-block px-2 py-2'>
        <div className='rounded-full bg-blue-500 w-2 h-2 inline-block mb-0.5' />
        <div className='w-4 inline-block' />
        <span className='text-sm text-gray-100 font-normal'>{description}</span>
       </div>)}
     </p>
     <div className='flex flex-row items-center mt-10'>
      <Link
       to={bannerAds.link}
       className="inline-block rounded-md border border-transparent bg-amber-500  text-center font-bold text-xl text-gray-200 hover:bg-amber-700 py-3 px-8"
      >
       {bannerAds.buttonTitle}
      </Link>
      <div className='w-16' />
      <div className=''>
       <Typography variant='h5' color='white'>{bannerAds.productName}</Typography>
       <div className='h-1' />
       <Typography variant='h6' color='white'>${bannerAds.productPrice}</Typography>
      </div>
     </div>

    </div>
   </div>
  </div>
 </div >)
}

export default BannerAds;