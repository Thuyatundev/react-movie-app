import React from "react";
import { Button, Navbar } from "flowbite-react";

const Header = () => {
  return (
    <div>
      <Navbar fluid rounded className="bg-dark text-white">
        <Navbar.Brand href="https://flowbite-react.com">

          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Logic Movie Channel
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>Login / Register</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" className="text-white">
            Home
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white">About</Navbar.Link>
          <Navbar.Link href="#" className="text-white">Services</Navbar.Link>
          <Navbar.Link href="#" className="text-white">Pricing</Navbar.Link>
          <Navbar.Link href="#" className="text-white">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
