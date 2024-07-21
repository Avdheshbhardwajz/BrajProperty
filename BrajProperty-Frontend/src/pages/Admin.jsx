// src/pages/Admin.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import UserDetails from "../components/UserDetails";
import PropertyManager from "../components/PropertyManager";

const hardcodedCredentials = {
  username: "admin",
  password: "password123",
};

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (
      username === hardcodedCredentials.username &&
      password === hardcodedCredentials.password
    ) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="min-h-[70vh] flex flex-row  font-poppins bg-gray-100 items-center justify-center">
      {!isAuthenticated ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
        >
          <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleLogin}
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-lg  w-full border-2 border-black"
        >
          <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
          <button
            onClick={handleLogout}
            className="mb-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            Logout
          </button>
          <PropertyManager />
          <UserDetails />
        </motion.div>
      )}
    </div>
  );
};

export default Admin;
