import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Banner from "../components/Banner";
import Tabs from "../components/Tabs";

const About = () => {
  return (
    <div>
      <Banner imglink="https://github.com/Avdheshbhardwajz/BrajProperty/blob/main/BrajProperty-Frontend/src/assets/WhatsApp%20Image%202024-07-23%20at%2012.28.54_2632e60d.jpg?raw=true" />

      {/* About Us Section */}
      <motion.div
        className="flex bg-[#101225] flex-row items-center content-center justify-center gap-6 px-4 py-20 flex-wrap-reverse"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col justify-around items-center content-center p-4 gap-4 font-poppins max-w-[500px] text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-bold text-3xl text-[#b4973a]">
            About Diamond Group
          </h2>
          <p className="font-light text-md text-[#b4973a]">
            At Diamond Group, we redefine the way you experience real estate.
            Our agency stands as a beacon of innovation, integrity, and
            expertise in the dynamic world of property transactions.
          </p>
          <p className="font-light text-md text-[#b4973a]">
            With a proven track record and a passion for connecting people with
            their dream properties, we are your trusted partner on the journey
            to finding the perfect place to call home.
          </p>
          <Link
            className="text-xl font-medium bg-[#b4973a]  px-4 py-2 text-white"
            to="/contact"
          >
            Contact Us
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img
            src="https://brajproperty.in/assets/images/ui_images/about-us.jpeg"
            alt="About Us"
          />
        </motion.div>
      </motion.div>

      {/* Our Mission Section */}
      <motion.div
        className="text-white bg-[#f2f3f2] flex py-20 flex-row items-center content-center justify-center gap-6 px-4 flex-wrap"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="https://brajproperty.in/assets/images/ui_images/about-us.jpeg"
            alt="Our Mission"
          />
        </motion.div>
        <motion.div
          className="flex flex-col justify-around items-center content-center p-4 gap-4 font-poppins max-w-[500px] text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="font-bold text-3xl text-[#b4973a]">Our Mission:</h2>
          <p className="font-light text-md text-[#b4973a]">
            At Diamond Group, we redefine the way you experience real estate.
            Our agency stands as a beacon of innovation, integrity, and
            expertise
          </p>
          <h2 className="font-bold text-3xl text-[#b4973a]">Why Choose Us?</h2>
          <Tabs />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
