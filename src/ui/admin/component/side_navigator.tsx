import { useState } from 'react';
import AppIcon from '../../../assets/images/app_icon.png';
import {
  ChevronLeftIcon,
  Bars3Icon,
  HomeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserIcon,
  BriefcaseIcon,
  NewspaperIcon,
  ShoppingCartIcon,
  PresentationChartLineIcon,
  HomeModernIcon,
} from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';

const menuList = [
  // { title: 'Dashboard', link: '/admin', component: <HomeIcon className="w-6 h-6" /> },

  {
    title: 'Accounts',
    link: '/admin/accounts',
    component: <UserIcon className="w-6 h-6" />,
    gap: true,
  },
  { title: 'Products ', link: '/admin/products', component: <BriefcaseIcon className="w-6 h-6" /> },
  { title: 'Carts', link: '/admin/carts', component: <ShoppingCartIcon className="w-6 h-6" /> },
  // {
  //   title: 'Analytics',
  //   link: '/admin/analytics',
  //   component: <PresentationChartLineIcon className="w-6 h-6" />,
  // },
  {
    title: 'News',
    link: '/admin/news',
    component: <NewspaperIcon className="w-6 h-6" />,
    gap: true,
  },
  {
    title: 'Report',
    link: '/admin/report',
    component: <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6" />,
  },
  { title: 'About', link: '/admin/info', component: <HomeModernIcon className="w-6 h-6" /> },
];

export const SidebarComponent = () => {
  const [open, setOpen] = useState(false);
  const [selectIndex, setSelectIndex] = useState(0);

  let naviagte = useNavigate();
  return (
    <div className={` ${open ? 'w-36' : 'w-16'} bg-dark-purple p-5  relative duration-300`}>
      <div
        className={`bg-white absolute cursor-pointer -right-3 top-9 w-7 h-7 flex items-center justify-center border-dark-purple
           border-2 rounded-full  ${!open && 'rotate-180'}`}
        onClick={() => setOpen(!open)}
      >
        {open && <ChevronLeftIcon className={`w-6 h-6 ${open ? 'rotate-180 block ' : 'hidden'}`} />}
        {!open && <Bars3Icon className={`w-6 h-6 ${!open ? 'rotate-180 block' : 'hidden'}`} />}
      </div>
      <Link to='/user' replace>
      
      <div className="flex gap-x-4 items-center">
        <img
          src={AppIcon}
          alt="app_icon"
          className={`cursor-pointer duration-500 w-12 h-12 ${open && 'rotate-[360deg]'}`}      
        />
        <h1
          className={`text-white origin-left font-medium text-2xl duration-200 pt-3 ${
            !open && 'scale-0'
          }`}
        >
          GaMeC
        </h1>
      </div>
      </Link>
      <ul className="pt-6">
        {menuList.map((menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${
              open ? 'w-max' : 'w-min'
            } 
              ${menu.gap ? 'mt-9' : 'mt-2'} ${index === selectIndex && 'bg-light-white'}`}
            onClick={() => {
              setSelectIndex(index);
              naviagte(menu.link, { replace: true });
            }}
          >
            {menu.component}
            <span className={`${!open && 'hidden'} origin-left duration-200 font-medium`}>
              {menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
