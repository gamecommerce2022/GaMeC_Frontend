import { useState, useEffect } from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Avatar,
} from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

export const Headers = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to="/user" className="flex items-center text-white text-sm p-1">
        Home
      </Link>
      <Link to="/user/browser" className="flex items-center text-white text-sm p-1">
        Browser
      </Link>
      <Link to="/user/news" className="flex items-center text-white text-sm p-1">
        Blogs
      </Link>
      <Link to="/user/contact" className="flex items-center text-white text-sm p-1">
        Contact
      </Link>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl py-1 px-4 lg:px-8 bg-black">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Typography
          as="a"
          href="/user"
          variant="small"
          className="mr-4 cursor-pointer py-1 font-normal flex flex-row items-center"
        >
          <span>G a M e C </span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex flex-row justify-evenly items-center">
          {/**Wishlist */}
          <IconButton variant="outlined" size="sm" className="hidden lg:inline-block mx-2">
            <Link to="user/wishlist">
              <HeartIcon className="text-blue-400 w-4 h-4" />
            </Link>
          </IconButton>

          {/** Shopping Cart */}
          <IconButton
            variant="outlined"
            size="sm"
            color="red"
            className="hidden lg:inline-block mx-2"
          >
            <Link to="user/cart">
              <ShoppingCartIcon className="text-red-400 w-4 h-4" />
            </Link>
          </IconButton>

          {/** Avatar User or Login Button */}
          {!avatar ? (
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block mx-2"
              onClick={() => setAvatar(true)}
            >
              <Link to="/signin">Sign in</Link>
            </Button>
          ) : (
            <Button
              variant="text"
              className="hidden lg:flex flex-row items-center py-0"
              onClick={() => setAvatar(false)}
            >
              <Typography variant="small">User Special Name</Typography>
            </Button>
          )}
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
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
};
