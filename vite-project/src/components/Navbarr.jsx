"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import "../index.css"; // Ensure you import the global CSS file

export default function Navbarr() {
  return (
    <div className="px-[10vw] bg-[#03045e]">
      <Navbar fluid rounded className="bg-[#03045e] text-white" font-medium>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://brajproperty.in/assets/images/logo/Braj-Property-Logo.png"
            className="mr-3 h-9 sm:h-14 font-poppins"
            alt="Brand logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            as={Link}
            to="/"
            active
            className="font-poppins text-xl text-white hover:text-[#caf0f8] font-medium"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/about"
            className="font-poppins text-xl text-white hover:text-[#caf0f8] font-medium"
          >
            About
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/properties"
            className="font-poppins text-xl text-white hover:text-[#caf0f8] font-medium"
          >
            Properties
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/contact"
            className="font-poppins text-xl text-white hover:text-[#caf0f8] font-medium"
          >
            Contact Us
          </Navbar.Link>
          {/* <Navbar.Link
            as={Link}
            to="/"
            active
            className="font-poppins text-xl text-white hover:text-[#caf0f8] font-medium"
          >
            Admin
          </Navbar.Link> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
