import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
import { BannerProductProp } from "../../../application/home/banner_poduct_props";
import BannerProduct from "./banner_product";

const bannerPoductList: BannerProductProp[] = [
 { id: 1, title: 'NEW GAME SAGA FAST TIME', description: 'More off this less hello samlande lied much over tightly circa horse taped mightly', image: 'https://source.unsplash.com/random/1920x1080/?game', buttonTitle: 'Shop now', link: '/shop' },
 { id: 2, title: 'NEW PHONE', description: 'More off this less hello samlande lied much over tightly circa horse taped mightly', image: 'https://source.unsplash.com/random/1920x1080/?phone', buttonTitle: 'Shop now', link: '/shop' },
 { id: 3, title: 'GAME GOTY', description: 'More off this less hello samlande lied much over tightly circa horse taped mightly', image: 'https://source.unsplash.com/random/1920x1080/?product', buttonTitle: 'Read now', link: '/blogs' },
 { id: 4, title: 'SUMMER SAGA', description: 'More off this less hello samlande lied much over tightly circa horse taped mightly', image: 'https://source.unsplash.com/random/1920x1080/?summer', buttonTitle: 'Shop now', link: '/shop' },
 { id: 5, title: 'LATEST NEWS', description: 'More off this less hello samlande lied much over tightly circa horse taped mightly', image: 'https://source.unsplash.com/random/1920x1080/?news', buttonTitle: 'Read now', link: '/blogs' },
]

const CarouselBannerProduct = () => {
 return (<Carousel slideInterval={5000}>
  {bannerPoductList.map((item: BannerProductProp) => <BannerProduct key={item.id} id={item.id} title={item.title} description={item.description} image={item.image} buttonTitle={item.buttonTitle} link={item.link} />)}
 </Carousel>)
}

export default CarouselBannerProduct;