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
import { Link, useNavigate } from 'react-router-dom';
import { User } from '../../../model/user_model';
import * as jwt from 'jsonwebtoken';
import axios from 'axios';
import Cookies from 'universal-cookie';
export const Headers = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));

    const getCurrentUser = async () => {
      const accessToken = await new Cookies().get('accessToken');
      console.log(accessToken);

      let config = { headers: { Authorization: 'Bearer ' + accessToken } };
      const result = await axios.post(
        `http://localhost:5000/api/user/get-current-user`,
        {},
        config,
      );
      const userInJson = result.data.user;
      console.log(userInJson);
      const user: User = {
        id: userInJson.id,
        firstName: userInJson.firstName,
        lastName: userInJson.lastName,
        displayName: userInJson.displayName,
        address: '99 van xuan',
        favorites: userInJson.favorites,
        email: userInJson.email,
      };
      setCurrentUser(user);
    };
    getCurrentUser();
  }, []);

  const navigate = useNavigate();

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
            <Link to="wishlist">
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
            <Link to="cart">
              <ShoppingCartIcon className="text-red-400 w-4 h-4" />
            </Link>
          </IconButton>

          {/** Avatar User or Login Button */}
          {!currentUser ? (
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block mx-2"
              onClick={() => navigate('/signin')}
            >
              <span>Sign in</span>
            </Button>
          ) : (
            <Typography variant="small">{currentUser.displayName}</Typography>
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
        <Button
          variant="gradient"
          size="sm"
          fullWidth
          className="mb-2"
          onClick={() => navigate('/wishlist')}
        >
          <span>Wishlist</span>
        </Button>
        <Button
          variant="gradient"
          size="sm"
          fullWidth
          className="mb-2"
          onClick={() => navigate('/cart')}
        >
          <span>Cart</span>
        </Button>
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Sign in</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
};
