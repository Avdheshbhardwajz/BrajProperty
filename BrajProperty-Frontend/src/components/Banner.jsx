// src/Banner.js
import React from "react";
import { motion } from "framer-motion";

const Banner = ({ imglink, heading, para }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-80 overflow-hidden" // Increased height here
    >
      <img src={imglink} alt="Banner" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4">
        <h1 className="text-4xl font-bold mb-2 font-poppins text-center">
          {heading}
        </h1>
        <p className="text-lg font-poppins">{para}</p>
      </div>
    </motion.div>
  );
};

export default Banner;
