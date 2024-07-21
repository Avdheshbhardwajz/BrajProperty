import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Tab1":
        return (
          <p className="font-popins text-md font-light">
            Our team of seasoned real estate professionals possesses extensive
            expertise in market analysis, industry trends, and legal
            regulations, ensuring comprehensive support for all your property
            needs.
          </p>
        );
      case "Tab2":
        return (
          <p className="font-popins text-md font-light">
            At Braj Property, we understand that each client is unique, with
            distinct preferences and requirements. That's why we tailor our
            approach to provide personalized solutions that match your
            individual needs and aspirations.
          </p>
        );
      case "Tab3":
        return (
          <p className="font-popins text-md font-light">
            At Braj Property, transparency is our commitment to you. We believe
            in open and honest communication, ensuring that you're kept informed
            at every step of your real estate journey. With us, you can trust
            that your best interests are always our priority.
          </p>
        );
      default:
        return <p>None.</p>;
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-[#00b4d8] shadow-md rounded-lg font-poppins">
      <div className="flex border-b mb-4">
        <button
          className={`px-4 py-2 ${
            activeTab === "Tab1" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => handleTabClick("Tab1")}
        >
          Expertise
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "Tab2" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => handleTabClick("Tab2")}
        >
          Personalized Approach
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "Tab3" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => handleTabClick("Tab3")}
        >
          Transparency
        </button>
      </div>
      <div className="content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tabs;
