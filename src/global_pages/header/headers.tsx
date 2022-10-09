/// Import Image
import appIcon from '../../assets/images/app_icon.png'

import { useState, useEffect } from "react";
import {
 Navbar,
 MobileNav,
 Typography,
 Button,
 IconButton,
 Avatar,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export const Headers = () => {
 const [openNav, setOpenNav] = useState<boolean>(false);
 const [avatar, setAvatar] = useState<boolean>(false);

 useEffect(() => {
  window.addEventListener(
   "resize",
   () => window.innerWidth >= 960 && setOpenNav(false)
  );
 }, []);

 const navList = (
  <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
   <Typography
    as="li"
    variant="small"
    color="white"
    className="p-1 font-normal"
   >
    <Link to="/" className="flex items-center">
     Home
    </Link>
   </Typography>
   <Typography
    as="li"
    variant="small"
    color="white"
    className="p-1 font-normal"
   >
    <Link to="/product-list" className="flex items-center">
     Category
    </Link>
   </Typography>
   <Typography
    as="li"
    variant="small"
    color="white"
    className="p-1 font-normal "
   >
    <Link to="/blogs" className="flex items-center">
     Blogs
    </Link>
   </Typography>
   <Typography
    as="li"
    variant="small"
    color="white"
    className="p-1 font-normal"
   >
    <Link to="/contact" className="flex items-center">
     Contact
    </Link>
   </Typography>
  </ul>
 );

 return (
  <Navbar className="mx-auto max-w-screen-xl py-1 px-4 lg:px-8 bg-black">
   <div className="container mx-auto flex items-center justify-between text-white">
    <Typography
     as="a"
     href="/"
     variant="small"
     className="mr-4 cursor-pointer py-1 font-normal flex flex-row items-center"
    >
     <img
      className="h-10 w-auto mr-2 pb-2"
      src={appIcon}
      alt=""
     />
     <span>G a M e C </span>
    </Typography>
    <div className="hidden lg:block">{navList}</div>
    <div className='flex flex-row justify-evenly items-center'>

     {/**Wishlist */}
     <IconButton variant="outlined" size="sm" className="hidden lg:inline-block mx-2">
      <Link to='/wishlist'>
       <HeartIcon className="text-blue-400 w-4 h-4" />
      </Link>
     </IconButton>

     {/** Shopping Cart */}
     <IconButton variant="outlined" size="sm" color="red" className="hidden lg:inline-block mx-2">
      <Link to='/cart'>
       <ShoppingCartIcon className="text-red-400 w-4 h-4" />
      </Link>
     </IconButton>

     {/** Avatar User or Login Button */}
     {!avatar ? <Button variant="gradient" size="sm" className="hidden lg:inline-block mx-2" onClick={() => setAvatar(true)}>
      <Link to='/signin'>Sign in</Link>
     </Button>
      :
      <Button variant="text" className="hidden lg:flex flex-row items-center py-0" onClick={() => setAvatar(false)}>
       <Avatar src={appIcon} alt="avatar" variant="circular" className='w-8 h-8 mx-1 mb-1' />
       <Typography variant="small">User Special Name</Typography>
      </Button>}

    </div>

    <IconButton
     variant="text"
     className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
     ripple={false}
     onClick={() => setOpenNav(!openNav)}
    >
     {openNav ? (
      <XMarkIcon className='w-6 h-6' />
     ) : (
      <Bars3Icon className='w-6 h-6' />
     )}
    </IconButton>
   </div>

   {/*Mobile Nav */}
   <MobileNav open={openNav}>
    {navList}
    <Button variant="gradient" size="sm" fullWidth className="mb-2">
     <span>Wishlist</span>
    </Button>
    <Button variant="gradient" size="sm" fullWidth className="mb-2">
     <span>Cart</span>
    </Button>
    <Button variant="gradient" size="sm" fullWidth className="mb-2">
     <span>Sign in</span>
    </Button>
   </MobileNav>
  </Navbar>
 );
}