import { Typography } from "@material-tailwind/react";
import { BannerAdsProp } from "../../application/home/banner_ads_props";
import BannerAds from "./component/banner_ads";
import BannerProduct from "./component/banner_product";
import CarouselBannerProduct from "./component/carousel_banner_product";
import Spacer from "./component/spacer";

const bannerAds: BannerAdsProp = {
 id: 1,
 image: "https://source.unsplash.com/random/1920x1080/?ads",
 title: "Unique Features Of leatest & Trending Poducts",
 productName: "Thần Trùng",
 productPrice: "3.00",
 descriptions: ['All frames constructed with hardwood solids and laminates', 'Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails', 'Arms, backs and seats are structurally reinforced'],
 buttonTitle: "Add to Cart",
 link: "/cart"
}

const Home = () => {
 return (<>
  <CarouselBannerProduct />
  <Spacer />
  <Typography variant='h1'>Feature Product</Typography>
  <Typography variant='h1'>Latest Product</Typography>
  <Typography variant='h1'>What Shop Offer</Typography>
  <BannerAds key={bannerAds.id} id={bannerAds.id} image={bannerAds.image} title={bannerAds.title} productName={bannerAds.productName} productPrice={bannerAds.productPrice} descriptions={bannerAds.descriptions} buttonTitle={bannerAds.buttonTitle} link={bannerAds.link} />
  <Typography variant='h1'>Trending Product</Typography>
  <Typography variant='h1'>Discount Items</Typography>
  <Typography variant='h1'>Top Categories</Typography>
  <Typography variant='h1'>Trending Product</Typography>
  <Typography variant='h1'>Banner Info</Typography>
  <Typography variant='h1'>Latest Blogs</Typography>
 </>)
}

export default Home;