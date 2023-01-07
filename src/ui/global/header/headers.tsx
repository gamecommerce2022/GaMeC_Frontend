import { useState, useEffect, useLayoutEffect } from 'react';
import { Navbar, MobileNav, Typography, Button, IconButton } from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import { Link, useNavigate } from 'react-router-dom';
import { User } from '../../../model/user_model';
import axios from 'axios';
import { config } from '../../../services/config';
import appIcon from '../../../assets/images/app_icon.png';
import Cookies from 'js-cookie';

export const Headers = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User>();
  const [accessToken, setAccessToken] = useState('');
  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
    setAccessToken(Cookies.get('accessToken') ?? '');
    console.log(accessToken);

    const getCurrentUser = async () => {
      const result = await axios.post(
        `http://localhost:5000/api/user/get-current-user`,
        {},
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      );
      const userInJson = result.data.user;
      console.log(userInJson);
      const user: User = {
        id: userInJson.id,
        firstName: userInJson.firstName,
        lastName: userInJson.lastName,
        displayName: userInJson.displayName,
        favorites: userInJson.favorites,
        email: userInJson.email,
        isVerified: userInJson.isVerified,
        role: userInJson.role,
      };
      setCurrentUser(user);
    };
    getCurrentUser();
  }, [accessToken]);

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
          className="cursor-pointer font-normal flex flex-row items-center justify-center"
        >
          <img src={appIcon} className="w-10 h-10" alt="app icon" />
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
            <Link to="info">
              <Typography variant="small" className="text-white">
                {currentUser.displayName}
              </Typography>
            </Link>
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
          <Link to="info">
            <Typography variant="small" className="text-white">
              {currentUser.displayName}
            </Typography>
          </Link>
        )}
      </MobileNav>
    </Navbar>
  );
};
