import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [review, setReview] = useState([]);
  const [error, setError] = useState(null);

  const fetchReview = async (url) => {
    try {
      const response = await axios.get(url);
      setReview(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchReview("https://brajproperty-backend.onrender.com/review");
  }, []);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % review.length);
  };

  const prevItem = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + review.length) % review.length
    );
  };

  if (error) {
    return <p>Error loading reviews: {error.message}</p>;
  }

  return (
    <div className="relative w-full">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <AnimatePresence>
          {review.length > 0 && (
            <motion.div
              key={currentIndex}
              className="absolute inset-0 flex items-center justify-center border-4 border-black "
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-center font-poppins p-4">
                <p className="text-2xl font-bold mb-4 text-gray-800">
                  "{review[currentIndex]?.feedback}"
                </p>
                <span className="mt-2 font-poppins font-light text-gray-[#03045e] text-lg text-[#0077b6]">
                  - {review[currentIndex]?.username}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevItem}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-black/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextItem}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-black/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Feedback;
