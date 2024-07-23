import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

const Properties = () => {
  const fetchData = async (url) => {
    try {
      const response = await axios.get(`${url}`);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData("https://brajproperty-backend.onrender.com/property");
  }, []);
  return (
    <div className="text-center flex flex-col items-center content-center">
      <Banner imglink="src\assets\WhatsApp Image 2024-07-23 at 12.28.55_da99e19f.jpg" />
      <div className=" px-4 py-16 max-w-[80%] flex flex-row gap-4 flex-wrap justify-between items-center content-center">
        {data.map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
