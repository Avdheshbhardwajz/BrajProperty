import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-9xl"
      >
        😢
      </motion.div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-4 text-3xl font-bold"
      >
        Oops! Page not found.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="mt-2 text-lg text-gray-600"
      >
        The page you're looking for doesn't exist.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleRedirect}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Go to Homepage
      </motion.button>
    </div>
  );
};

export default NotFound;
