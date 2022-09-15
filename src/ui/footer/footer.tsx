/// Import Image
import appIcon from '../../assets/images/app_icon.png'

import { Button, Footer, TextInput } from "flowbite-react";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Typography } from '@material-tailwind/react';

const FooterApp = () => (
 <Footer>
  <div className="w-full">
   <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
    <div className='flex flex-col justify-center'>
     <img
      className="h-24 w-24 mr-2 pb-2"
      src={appIcon}
      alt=""
     />
     <div className="mb-2 flex flex-row">
      <div className='mr-2'>
       <TextInput
        id="email1"
        type="email"
        placeholder="Enter Email Address"
        required={true}
       />
      </div>

      <Button type="submit">
       Sign Up
      </Button>
     </div>

     <div className='text-gray-500'>
      <Typography variant='small'>Contact Info</Typography>
      <Typography variant='small'>17 Princess Road, London, Greater London NW1 8JR, UK</Typography>
     </div>
    </div>
    <div>
     <Footer.Title title="categories" />
     <Footer.LinkGroup col={true}>
      <Footer.Link href="#">
       Laptop & Computer
      </Footer.Link>
      <Footer.Link href="#">
       Figures & Card
      </Footer.Link>
      <Footer.Link href="#">
       Smart Phones & Tablets
      </Footer.Link>
      <Footer.Link href="#">
       Video Games & Consoles
      </Footer.Link>
      <Footer.Link href="#">
       Waterproof Headphones
      </Footer.Link>
     </Footer.LinkGroup>
    </div>
    <div>
     <Footer.Title title="customer care" />
     <Footer.LinkGroup col={true}>
      <Footer.Link href="#">
       Account
      </Footer.Link>
      <Footer.Link href="#">
       Discount
      </Footer.Link>
      <Footer.Link href="#">
       Order History
      </Footer.Link>
      <Footer.Link href="#">
       Return
      </Footer.Link>
     </Footer.LinkGroup>
    </div>
    <div>
     <Footer.Title title="legal" />
     <Footer.LinkGroup col={true}>
      <Footer.Link href="#">
       Privacy Policy
      </Footer.Link>
      <Footer.Link href="#">
       Licensing
      </Footer.Link>
      <Footer.Link href="#">
       Terms & Conditions
      </Footer.Link>
     </Footer.LinkGroup>
    </div>
   </div>
   <div className="w-full bg-white py-6 px-4 sm:flex sm:items-center sm:justify-between text-gray-800">
    <Footer.Copyright
     href="#"
     by="GaMeC"
     year={2022} />
    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
     <Footer.Icon
      href="#"
      icon={FaFacebookF} />
     <Footer.Icon
      href="#"
      icon={FaInstagram} />
     <Footer.Icon
      href="#"
      icon={FaTwitter} />
    </div>
   </div>
  </div>
 </Footer>)

export default FooterApp;