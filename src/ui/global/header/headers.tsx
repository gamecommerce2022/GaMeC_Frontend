import { useState, useEffect, useLayoutEffect } from 'react';
import { Navbar, MobileNav, Typography, Button, IconButton } from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import { Link, useNavigate } from 'react-router-dom';
import { User } from '../../../model/user_model';
import axios from 'axios';
import { config } from '../../../services/config';
import appIcon from '../../../assets/images/app_icon.png';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

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

  return (
    <div className="bg-gray-800">
      <div className="border py-3 px-6">
        <div className="flex justify-between">
          <Link to="/user" className="flex items-center">
            <img src={appIcon} width={20} height={20} alt="App icon" />
            <span className="ml-2 font-semibold text-white">GaMeC</span>
            <span className="ml-2 text-white">By Gamer for Gamer</span>
          </Link>

          <div className="ml-2 flex">
            <a
              href="/user/browser"
              className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} color="white" />
              <span className="text-sm font-medium text-white">Browse</span>
            </a>

            <a
              href="/user/wishlist"
              className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium text-white">Wishlist</span>
            </a>

            <a
              href="/user/cart"
              className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 "
            >
              <div className="relative">
                <FontAwesomeIcon icon={faCartShopping} color="#90EE90" />
              </div>
              <span className="text-sm font-medium text-white">Cart</span>
            </a>
            {!currentUser ? (
              <div
                onClick={() => navigate('/signin')}
                className="ml-2 flex cursor-pointer brightness-90 hover:brightness-100 items-center gap-x-1 rounded-md border py-2 px-4 bg-blue-500 border-none"
              >
                <span className="text-sm font-medium text-white">Sign in</span>
              </div>
            ) : (
              <a href="/user/info">
                <Typography variant="small" className="text-white">
                  {currentUser.displayName}
                </Typography>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
