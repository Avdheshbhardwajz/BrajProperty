import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty((prevProperty) => ({
      ...prevProperty,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://brajproperty-backend.onrender.com/property",
        property
      );
      console.log(response.data);
      alert("Property added successfully!");
      setProperties((prevProperties) => [...prevProperties, response.data]);
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
        `https://brajproperty-backend.onrender.com/property/${id}`
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
    <div>
      <h3 className="text-xl font-semibold mb-4">Manage Properties</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Property Name:</label>
          <input
            type="text"
            name="propertyName"
            value={property.propertyName}
            onChange={handleChange}
            required
            className="block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Location:</label>
          <input
            type="text"
            name="location"
            value={property.location}
            onChange={handleChange}
            required
            className="block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Details:</label>
          <textarea
            name="details"
            value={property.details}
            onChange={handleChange}
            required
            className="block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Price:</label>
          <input
            type="number"
            name="price"
            value={property.price}
            onChange={handleChange}
            required
            className="block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">PDF Link:</label>
          <input
            type="text"
            name="pdfLink"
            value={property.pdfLink}
            onChange={handleChange}
            required
            className="block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Image URL:</label>
          <input
            type="text"
            name="img"
            value={property.img[0]}
            onChange={(e) =>
              setProperty((prevProperty) => ({
                ...prevProperty,
                img: [e.target.value],
              }))
            }
            required
            className="block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
        >
          Add Property
        </button>
      </form>
      <ul className="mt-4">
        {properties.map((prop) => (
          <motion.li
            key={prop._id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex justify-between items-center mb-2 p-2 bg-gray-50 border border-gray-200 rounded-md"
          >
            {prop.propertyName}
            <button
              onClick={() => removeProperty(prop._id)}
              className="text-red-500 hover:text-red-600 transition"
            >
              Delete
            </button>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyManager;
