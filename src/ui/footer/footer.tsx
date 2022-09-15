import { Footer } from "flowbite-react";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const FooterApp = () => (
 <Footer>
  <div className="w-full">
   <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
    <div>
     <Footer.Title title="Company" />
     <Footer.LinkGroup col={true}>
      <Footer.Link href="#">
       About
      </Footer.Link>
      <Footer.Link href="#">
       Brand Center
      </Footer.Link>
      <Footer.Link href="#">
       Blog
      </Footer.Link>
     </Footer.LinkGroup>
    </div>
    <div>
     <Footer.Title title="help center" />
     <Footer.LinkGroup col={true}>
      <Footer.Link href="#">
       Twitter
      </Footer.Link>
      <Footer.Link href="#">
       Facebook
      </Footer.Link>
      <Footer.Link href="#">
       Contact Us
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
    <div>
     <Footer.Title title="download" />
     <Footer.LinkGroup col={true}>
      <Footer.Link href="#">
       iOS
      </Footer.Link>
      <Footer.Link href="#">
       Android
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