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
        <Banner
          imglink="https://th.bing.com/th/id/R.b851ce4296d031b23c1aad7473b42098?rik=GsOCFTvScoYzSQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-3Y9GOZCp3h0%2fVWQD-XjGRhI%2fAAAAAAAAJAE%2fkxTaA4CN0RM%2fs1600%2fradha-and-god-krishna-image.jpg&ehk=sKb1RPIOw0fQOqGI%2bpotkrYx7L3V%2bNOV3EHSoruxpHQ%3d&risl=&pid=ImgRaw&r=0"
          heading="contact heading will be here"
          para="contact para will be here "
        />
      </motion.div>

      {/* Contact section starts here */}
      <motion.div
        className="p-4 flex flex-row gap-12 justify-center items-center content-center flex-wrap py-20"
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
          <h2 className="font-poppins text-3xl font-bold text-[#03045e]">
            Get In Touch
          </h2>
          <p className="font-poppins text-lg font-light">
            Let's start building your dreams together—reach out to us and let
            the journey to your ideal property begin.
          </p>
          <motion.div
            className="border-2 border-black p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-bold text-lg text-[#03045e]">Address:-</h3>
            <p>Infront of kailash nagar Parikrama marg Vrindavan</p>
          </motion.div>
          <motion.div
            className="border-2 border-black p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-bold text-lg text-[#03045e]">Mobile:-</h3>
            <p>+91-8394953005</p>
          </motion.div>
          <motion.div
            className="border-2 border-black p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-bold text-lg text-[#03045e]">Email:-</h3>
            <p>salesbrajproperty@gmail.com</p>
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
