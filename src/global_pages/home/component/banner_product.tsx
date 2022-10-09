import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { BannerProductProp } from "../../../application/home/banner_poduct_props";

const BannerProduct: React.FC<BannerProductProp> = (props) => {
 const bannerProduct: BannerProductProp = props;
 return (
  <div key={bannerProduct.id} className="relative bg-gray-900 h-full" style={{ backgroundImage: `url('https://source.unsplash.com/random/1920x1080/?black')` }}>
   <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
     <div className="sm:max-w-lg">
      <h1 className="font text-4xl font-bold tracking-tight text-indigo-700 sm:text-6xl">
       {bannerProduct.title}
      </h1>
      <p className="mt-4 text-xl text-gray-100">
       {bannerProduct.description}
      </p>
     </div>
     <div>
      <div className="mt-10">
       {/* Decorative image grid */}
       <div
        className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
       >
        <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-2">
         <div className="flex items-center space-x-6 lg:space-x-8">
          <img
           className="h-auto w-auto rounded-xl"
           src={bannerProduct.image}
           alt={bannerProduct.title}
          />
         </div>
        </div>
       </div>

       <Button variant="gradient" color="amber" size="sm" className="hidden lg:inline-block mx-2 rounded-md py-3 px-8 text-center font-bold text-xl text-gray-200">
        <Link to={bannerProduct.link}>{bannerProduct.buttonTitle}</Link>
       </Button>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default BannerProduct;