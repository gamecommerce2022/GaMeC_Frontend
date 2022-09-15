import { EnvelopeIcon, PhoneIcon, UserIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import { DropDownCurrency, DropDownLanguage } from '../../../application/header_type/drop_down_type';
import HeaderSelector from './header_selector';

const BannerHeader = () => {
 return (<>
  <div className="max-w-full bg-purple-700 h-10 flex flex-row justify-center items-center font-medium">
   <div className="flex flex-row items-center">
    <EnvelopeIcon className="w-4 h-4 text-white" />
    <p className="text-sm ml-3 text-white font-semibold cursor-default">gamecomercer@gmail.com</p>
   </div>
   <div className="flex flex-row items-center ml-12">
    <PhoneIcon className="w-4 h-4 text-white" />
    <p className="text-sm ml-3 text-white font-semibold cursor-default">(+84) 12345678</p>
   </div>
   <div className="flex flex-row items-center ml-40">
    <div className=''>
     <HeaderSelector list={DropDownLanguage} />
    </div>
    <div className='ml-2'>
     <HeaderSelector list={DropDownCurrency} />
    </div>

    <Link to='/login' className="flex flex-row items-center ml-4">
     <p className="text-sm text-white font-semibold cursor-default">Login</p>
     <UserIcon className="w-4 h-4 text-white ml-3" />
    </Link>
    <Link to='/wishlist' className="flex flex-row items-center ml-4">
     <p className="text-sm text-white font-semibold cursor-default">Wishlist</p>
     <HeartIcon className="w-4 h-4 text-white ml-3" />
    </Link>
    <Link to="/shopping-cart" className='ml-4'>
     <ShoppingCartIcon className="w-4 h-4 text-white" />
    </Link>
   </div>
  </div>
 </>)
}

export default BannerHeader;