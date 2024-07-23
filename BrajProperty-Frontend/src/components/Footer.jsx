import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faEnvelope,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="w-[99vw] py-16 border-black border-2 bg-[#03045e] min-h-[300px] px-[5%]  flex flex-row justify-center items-center content-center gap-x-20 gap-y-10 flex-wrap box-border">
      <div className=" flex-col justify-center  text-white  min-w-[350px] max-w-[400px] p-4">
        <h1 className="font-poppins text-xl font-bold text-center">
          Diamond Group
        </h1>
        <p className="font-poppins text-center">
          On this holy land of Vrindavan, Diamond Group gives you a golden
          opportunity to build a home in Vrindavan which is at a very prime
          location inside Vrindavan. We give the best option to our customers
          which will be available at a very good rate.
        </p>
        <div className="flex justify-around m-4">
          <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
          <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
          <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
        </div>
      </div>
      <div className="  text-white p-4 flex flex-col justify-around min-w-[300px] text-center font-poppins font-medium gap-y-1">
        <p className="font-poppins text-xl font-bold">Useful links</p>
        <div className="flex flex-col gap-y-2 font-poppins text-lg">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
      <div className="  text-white p-4 font-poppins flex flex-col gap-y-4 font-medium text-lg text-center items-center content-center">
        <p className="text-xl font-bold">Contact</p>
        <div className="flex flex-row items-center text-center gap-x-2">
          <FontAwesomeIcon icon={faLocationDot} />
          Diamond Properties, Roadways Colony, Infront of Pratap Bagicha Near
          Shree Ji Baba School, Goverdhan Road Mathura 281004
        </div>
        <div className="flex flex-row items-center text-center gap-x-2">
          <FontAwesomeIcon icon={faAddressBook} />
          917017854813
        </div>
        <div className="flex flex-row items-center text-center gap-x-2">
          <FontAwesomeIcon icon={faEnvelope} />
          diamondproperties75@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
