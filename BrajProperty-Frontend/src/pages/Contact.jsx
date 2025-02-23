import React from "react";
import { motion } from "framer-motion";
import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";

const Contact = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Banner imglink="https://github.com/Avdheshbhardwajz/BrajProperty/blob/main/BrajProperty-Frontend/src/assets/WhatsApp%20Image%202024-07-23%20at%2012.28.55_da99e19f.jpg?raw=true" />
      </motion.div>

      {/* Contact section starts here */}
      <motion.div
        className="p-4 flex bg-[#101225] flex-row gap-12 justify-center items-center content-center flex-wrap py-20"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="font-poppins p-4 flex flex-col gap-4 max-w-[600px] text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-poppins text-3xl font-bold text-[#b4973a]">
            Get In Touch
          </h2>
          <p className="font-poppins text-lg font-light text-[#b4973a]">
            Let's start building your dreams together—reach out to us and let
            the journey to your ideal property begin.
          </p>
          <motion.div
            className="border-2 border-[#b4973a] p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-bold text-lg text-[#b4973a]">Address:-</h3>
            <p className="text-[#b4973a]">
              Diamond Properties, Roadways Colony, Infront of Pratap Bagicha
              Near Shree Ji Baba School, Goverdhan Road Mathura 281004
            </p>
          </motion.div>
          <motion.div
            className="border-2 border-[#b4973a] p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-bold text-lg text-[#b4973a]">Mobile:-</h3>
            <p className="text-[#b4973a]">+91-7017854813</p>
          </motion.div>
          <motion.div
            className="border-2 border-[#b4973a] p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-bold text-lg text-[#b4973a]">Email:-</h3>
            <p className="text-[#b4973a]"> diamondproperties75@gmail.com</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="min-w-[400px] text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ContactForm />
        </motion.div>
      </motion.div>
      {/* Contact section ends here */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Map />
      </motion.div>
    </div>
  );
};

export default Contact;
