import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Properties from "../pages/Properties";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Admin from "../pages/Admin";
import RegisterAdmin from "./RegisterAdmin";
import PropertyManager from "./PropertyManager";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/register" element={<RegisterAdmin />} />
      <Route path="/manager" element={<PropertyManager />} />
    </Routes>
  );
};

export default AllRoutes;
