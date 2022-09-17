import { Typography } from "@material-tailwind/react";
import BannerAds from "./component/banner_ads";
import CarouselBannerProduct from "./component/carousel_banner_product";
import Spacer from "./component/spacer";
import TabsDiscountItem from "./component/tabs_discount_item";

const Home = () => {
 return (<>
  <CarouselBannerProduct />
  <Spacer />
  <Typography variant='h1'>Latest Product</Typography>
  <Spacer />
  <BannerAds />
  <Spacer />
  <Typography variant='h1'>Top Categories</Typography>
  <Spacer />
  <TabsDiscountItem />
  <Spacer />
  <Typography variant='h1'>Latest Blogs</Typography>
 </>)
}

export default Home;