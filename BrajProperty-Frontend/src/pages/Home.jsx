import React, { useEffect } from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Feedback from "../components/Feedback";
import { motion, useInView } from "framer-motion";
import axios from "axios";
import { useState } from "react";

const Home = () => {
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
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    fetchData(`${backendUrl}/property`);
  }, []);

  return (
    <>
      <Banner imglink="https://raw.githubusercontent.com/Avdheshbhardwajz/BrajProperty/main/BrajProperty-Frontend/src/assets/WhatsApp%20Image%202024-07-23%20at%2012.28.55_da99e19f.jpg" />
      {/* main focus section starting here  */}
      {/* <div className="border-black border-2  flex flex-col items-center content-center justify-center gap-y-4 gap-x-4 bg-[#caf0f8] py-16  text-center p-4">
        <div className="mb-4 flex flex-col gap-y-6 border-2 border-black p-4 max-w-[70%] min-w-[400px]">
          {" "}
          <h2 className="text-3xl font-bold font-poppins text-[#03045e]">
            Our Main Focus
          </h2>
          <p className="font-poppins fold-medium text-lg  border-2 border-black text-center text-[#03045e]">
            At Braj Property, we cater to all your real estate needs. From
            finding your dream home to renting or selling properties, our expert
            team ensures a seamless experience every step of the way.
          </p>{" "}
        </div>
        <div className="flex flex-row justify-center gap-x-12 gap-y-8 flex-wrap border-red-500 p-4 border-2">
          <div className="flex flex-col p-4 border-black border-2  min-w-[300px] max-w-[300px] items-center font-poppins gap-y-4">
            <img
              className="max-w-[250px] border-2 border-black"
              src="https://cdn5.vectorstock.com/i/1000x1000/41/69/colorful-flat-residential-houses-vector-22664169.jpg"
            />
            <h3 className="font-bold text-lg text-[#03045e]">Buy a Home</h3>
            <p className="text-[#03045e]">
              over homes for sale available on the website, we can match you
              with a house you will want to call home.
            </p>
            <Link
              className="border-2 border-black px-4 py-2 bg-[#03045e] text-white"
              to="/properties"
            >
              View More
            </Link>
          </div>
          <div className="flex flex-col p-4 border-black border-2 min-w-[300px] max-w-[300px] items-center font-poppins gap-y-4">
            <img
              className="max-w-[250px] border-2 border-black"
              src="https://cdn5.vectorstock.com/i/1000x1000/41/69/colorful-flat-residential-houses-vector-22664169.jpg"
            />
            <h3 className="font-bold text-lg text-[#03045e]">Sell a Home</h3>
            <p className="text-[#03045e]">
              over homes for sale available on the website, we can match you
              with a house you will want to call home.
            </p>
            <Link
              className="border-2 border-black px-4 py-2 bg-[#03045e] text-white"
              to="/properties"
            >
              View More
            </Link>
          </div>
        </div>
      </div> */}

      <div className=" flex flex-col items-center content-center justify-center gap-y-4 gap-x-4 bg-[#101225] py-16 text-center p-4">
        <motion.div
          className="mb-4 flex flex-col gap-y-6  p-4 max-w-[70%] min-w-[400px]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold font-poppins text-[#b4973a]">
            Our Main Focus
          </h2>
          <p className="font-poppins font-light text-xl  text-center text-[#b4973a]">
            At Diamond Group, we cater to all your real estate needs. From
            finding your dream home to renting or selling properties, our expert
            team ensures a seamless experience every step of the way.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-row justify-center gap-x-12 gap-y-8 flex-wrap p-4 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="flex flex-col p-4 border-[#b4973a] border-2 min-w-[300px] max-w-[300px] items-center font-poppins gap-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* <img
              className="max-w-[250px]"
              src="https://github.com/Avdheshbhardwajz/BrajProperty/blob/main/BrajProperty-Frontend/src/assets/buy%20(1).png?raw=true"
              alt="Buy a Home"
            /> */}
            <h3 className="font-bold text-2xl text-[#b4973a]">Buy a Home</h3>
            <p className="text-[#b4973a]">
              Over homes to Buy available on the website, we can match you with
              a house you will want to call home.
            </p>
            <Link
              className="border-2 border-black px-4 py-2 bg-[#b4973a] text-white"
              to="/properties"
            >
              View More
            </Link>
          </motion.div>
          <motion.div
            className="flex flex-col p-4 border-[#b4973a] border-2 min-w-[300px] max-w-[300px] items-center font-poppins gap-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* <img
              className="max-w-[250px]"
              src="https://github.com/Avdheshbhardwajz/BrajProperty/blob/main/BrajProperty-Frontend/src/assets/buy-a-house.png?raw=true"
              alt="Sell a Home"
            /> */}
            <h3 className="font-bold text-2xl text-[#b4973a]">Sell a Home</h3>
            <p className="text-[#b4973a]">
              Over homes for sale available on the website, we can match you
              with a house you will want to call home.
            </p>
            <Link
              className="border-2 border-black px-4 py-2 bg-[#b4973a] text-white"
              to="/properties"
            >
              View More
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* our main focus completed here  */}

      {/* best properties section starting here  */}
      <div className="text-center flex gap-y-6 flex-col items-center content-center  p-4 py-16 bg-[#f2f3f2]">
        <div className="mb-4 max-w-[90%] flex flex-col gap-y-6">
          {" "}
          <h2 className="text-3xl font-bold font-poppins text-[#b4973a]">
            Best Properties
          </h2>
          <p className="font-poppins fold-medium text-lg   text-center text-[#b4973a]">
            Explore our handpicked selection of top-notch properties. From
            elegant villas to modern apartments, each property is chosen with
            care to ensure your satisfaction. Let us guide you to your perfect
            home.
          </p>{" "}
        </div>
        <div className="flex flex-row max-w-[90%] gap-4 flex-wrap  justify-center">
          {data.map((item, index) => (
            <Card {...item} key={index} />
          ))}

          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
        </div>
      </div>

      {/* best properties section ednding here */}

      {/* feedback section starts here  */}

      <div className="text-center flex gap-y-6 flex-col items-center content-center bg-[#101225] text-[#b4973a]  py-16 px-8 font-poppins">
        <div className="mb-4 max-w-[90%] flex flex-col gap-y-6">
          {" "}
          <h2 className="text-3xl font-bold font-poppins text-[#b4973a]">
            Clients Feedback
          </h2>
          <p className="font-poppins fold-medium text-lg text-[#b4973a]   text-center">
            Discover what our clients have to say about their experience with
            Braj Property. From seamless transactions to exceptional service,
            read real testimonials that speak to our commitment to excellence.
          </p>{" "}
        </div>
        <Feedback />
      </div>
      {/* feedbakc section ends here  */}
    </>
  );
};

export default Home;
