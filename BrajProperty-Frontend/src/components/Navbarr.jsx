import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css"; // Ensure you import the global CSS file

export default function Navbarr() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  };

  return (
    <div className="bg-[#101225] flex flex-row justify-between px-[5%] items-center p-4">
      <div className="flex items-center">
        <Link to="/">
          <img
            src="https://github.com/Avdheshbhardwajz/BrajProperty/blob/main/BrajProperty-Frontend/src/assets/WhatsApp_Image_2024-07-23_at_12.28.53_ed33313f-removebg-preview.png?raw=true"
            className="mr-3 font-poppins max-w-[20%] "
            alt="Brand logo"
          />
        </Link>
      </div>
      <button
        onClick={toggleMenu}
        className="text-white focus:outline-none lg:hidden"
      >
        &#9776;
      </button>
      <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:static lg:w-auto">
        <Link
          to="/"
          className="font-poppins text-xl text-[#b4973a] hover:text-[#caf0f8] font-medium lg:mx-4"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="font-poppins text-xl text-[#b4973a] hover:text-[#caf0f8] font-medium lg:mx-4"
        >
          About
        </Link>
        <Link
          to="/properties"
          className="font-poppins text-xl text-[#b4973a] hover:text-[#caf0f8] font-medium lg:mx-4"
        >
          Properties
        </Link>
        <Link
          to="/contact"
          className="font-poppins text-xl text-[#b4973a] hover:text-[#caf0f8] font-medium lg:mx-4"
        >
          Contact Us
        </Link>
        <Link
          to="/admin"
          className="font-poppins text-xl text-[#b4973a] hover:text-[#caf0f8] font-medium lg:mx-4"
        >
          login
        </Link>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-[#101225] z-50 p-4 lg:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <button
              onClick={toggleMenu}
              className="text-white text-2xl absolute top-4 right-4 focus:outline-none"
            >
              &times;
            </button>
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              <Link
                to="/"
                className="font-poppins text-2xl text-[#b4973a] hover:text-[#caf0f8] font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="font-poppins text-2xl text-[#b4973a] hover:text-[#caf0f8] font-medium"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/properties"
                className="font-poppins text-2xl text-[#b4973a] hover:text-[#caf0f8] font-medium"
                onClick={toggleMenu}
              >
                Properties
              </Link>
              <Link
                to="/contact"
                className="font-poppins text-2xl text-[#b4973a] hover:text-[#caf0f8] font-medium"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
              <Link
                to="/admin"
                className="font-poppins text-2xl text-[#b4973a] hover:text-[#caf0f8] font-medium"
                onClick={toggleMenu}
              >
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
