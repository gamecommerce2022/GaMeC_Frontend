import { Alert, Dropdown, Navbar } from "flowbite-react";

const Header = () => {
 return (
  <>
   <Alert color="info">Alert!</Alert>
   <Dropdown label="Dropdown button">
    <Dropdown.Item>
     Dashboard
    </Dropdown.Item>
    <Dropdown.Item>
     Settings
    </Dropdown.Item>
    <Dropdown.Item>
     Earnings
    </Dropdown.Item>
    <Dropdown.Item>
     Sign out
    </Dropdown.Item>
   </Dropdown>
   <Navbar
    fluid={true}
    rounded={true}
   >
    <Navbar.Brand href="/">
     <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      GaMeC
     </span>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
     <Navbar.Link
      href="/"
      active={true}
     >
      Home
     </Navbar.Link>
     <Navbar.Link href="/shop">
      Shop
     </Navbar.Link>
     <Navbar.Link href="/wishlist">
      Wishlist
     </Navbar.Link>
     <Navbar.Link href="/blogs">
      Blogs
     </Navbar.Link>
     <Navbar.Link href="/contact">
      Contact
     </Navbar.Link>
    </Navbar.Collapse>
   </Navbar>
  </>
 )
}

export default Header;