import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import UserDetails from "./UserDetails";

const PropertyManager = () => {
  const [property, setProperty] = useState({
    propertyName: "",
    location: "",
    details: "",
    price: "",
    pdfLink: "",
    img: [""],
  });

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/property`
        );
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty((prevProperty) => ({
      ...prevProperty,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const { value } = e.target;
    setProperty((prevProperty) => ({
      ...prevProperty,
      img: [value],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/property/add`,
        property,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      console.log(response.data);
      alert("Property added successfully!");

      const newProperty = response.data.Property || response.data;

      setProperties((prevProperties) => [...prevProperties, newProperty]);

      setProperty({
        propertyName: "",
        location: "",
        details: "",
        price: "",
        pdfLink: "",
        img: [""],
      });
    } catch (error) {
      console.error("Error adding property:", error);
      alert("Failed to add property.");
    }
  };

  const removeProperty = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/property/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      setProperties((prevProperties) =>
        prevProperties.filter((property) => property._id !== id)
      );
      alert("Property removed successfully!");
    } catch (error) {
      console.error("Error removing property:", error);
      alert("Failed to remove property.");
    }
  };

  return (
    <div className="p-6 font-poppins bg-gray-100 min-h-screen">
      <motion.h3
        className="text-3xl font-semibold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Manage Properties
      </motion.h3>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto"
      >
        <div className="mb-4">
          <label className="block mb-2 text-lg">Property Name:</label>
          <input
            type="text"
            name="propertyName"
            value={property.propertyName}
            onChange={handleChange}
            required
            className="block w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg">Location:</label>
          <input
            type="text"
            name="location"
            value={property.location}
            onChange={handleChange}
            required
            className="block w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg">Details:</label>
          <textarea
            name="details"
            value={property.details}
            onChange={handleChange}
            required
            className="block w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg">Price:</label>
          <input
            type="number"
            name="price"
            value={property.price}
            onChange={handleChange}
            required
            className="block w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg">PDF Link:</label>
          <input
            type="text"
            name="pdfLink"
            value={property.pdfLink}
            onChange={handleChange}
            required
            className="block w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg">Image URL:</label>
          <input
            type="text"
            name="img"
            value={property.img[0]}
            onChange={handleImageChange}
            required
            placeholder="Enter image URL"
            className="block w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
        >
          Add Property
        </button>
      </motion.form>
      <motion.ul
        className="mt-6 max-w-md mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {properties.map((prop) => (
          <motion.li
            key={prop._id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex justify-between items-center mb-2 p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <span>{prop.propertyName}</span>
            <button
              onClick={() => removeProperty(prop._id)}
              className="text-red-500 hover:text-red-600 transition"
            >
              Delete
            </button>
          </motion.li>
        ))}
      </motion.ul>
      <motion.div
        className="mt-8 max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <UserDetails />
      </motion.div>
    </div>
  );
};

export default PropertyManager;
