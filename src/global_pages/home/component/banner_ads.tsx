import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { BannerAdsProp } from "../../../application/home/banner_ads_props";

const bannerAd: BannerAdsProp = {
 id: 1,
 image: "https://source.unsplash.com/random/1920x1080/?ads",
 title: "Unique Features Of leatest & Trending Poducts",
 productName: "Thần Trùng",
 productPrice: "3.00",
 descriptions: ['All frames constructed with hardwood solids and laminates', 'Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails', 'Arms, backs and seats are structurally reinforced'],
 buttonTitle: "Add to Cart",
 link: "/cart"
}

const BannerAds = () => {
 const bannerAds = bannerAd;
 return (<div key={bannerAds.id} className="relative  bg-gray-900 h-full rounded-md" style={{ backgroundImage: `url('https://source.unsplash.com/random/1920x1080/?black')` }}>
  <div className="pt-16 pb-32 sm:pt-24 sm:pb-24 lg:pt-24 lg:pb-24">
   <div className="relative mx-auto max-w-7xl sm:static flex flex-row items-center justify-between">

    {/* Decorative image grid */}
    <div className="w-1/2 h-3/4 lg:inset-y-0 lg:max-w-4xl pointer-events-none">
     <img
      className="rounded-xl"
      src={bannerAds.image}
      alt={bannerAds.title}
     />
    </div>

    <div className="sm:max-w-lg">
     <h1 className="text-4xl font-bold tracking-tight text-indigo-700 sm:text-3xl">
      {bannerAds.title}
     </h1>
     <ul className="mt-4 list-disc list-outside">
      {bannerAds.descriptions.map((description: string) =>
       <li className='text-blue-500 text-xl'>
        <Typography variant='paragraph' className='text-gray-100'>{description}</Typography>
       </li>
      )}
     </ul>
     <div className='flex flex-row items-center mt-10'>
      <Button variant="gradient" color="amber" size="sm" className="hidden lg:inline-block mx-2 rounded-md py-3 px-8 text-center font-bold text-xl text-gray-200">
       <Link to={bannerAds.link}>{bannerAds.buttonTitle}</Link>
      </Button>
      <div className='w-8' />
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