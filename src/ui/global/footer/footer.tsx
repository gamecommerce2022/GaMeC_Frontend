import { Footer } from 'flowbite-react';

const FooterApp = () => (
  <Footer bgDark={true}>
    <div className="w-full">
      <div className="grid grid-cols-2 gap-8 py-8 px-6">
        <div>
          <Footer.Title title="Company" />
          <Footer.LinkGroup col={true}>
            <Footer.Link href="/user/browser">
              <span className="text-white">Browser</span>
            </Footer.Link>
            <Footer.Link href="/user/contact">
              <span className="text-white">Contact</span>
            </Footer.Link>
            <Footer.Link href="/user/news">
              <span className="text-white">Blog</span>
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="Categories" />
          <Footer.LinkGroup col={true}>
            <Footer.Link href="/user/browser?q=PS5">
              <span className="text-white">PS5</span>
            </Footer.Link>
            <Footer.Link href="/user/browser?q=PS4">
              <span className="text-white">PS4</span>
            </Footer.Link>
            <Footer.Link href="/user/browser?q=Nintendo Switch">
              <span className="text-white">Switch</span>
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
      {/* <div className="w-full bg-gray-700 py-6 px-4 sm:flex sm:items-center sm:justify-between">
      <Footer.Copyright
        href="#"
        by="GaMeC"
        year={2022}
      />    
    </div> */}
    </div>
  </Footer>
);
export default FooterApp;
