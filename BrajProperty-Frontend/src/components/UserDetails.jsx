// src/pages/UserDetails.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const UserDetails = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    try {
      const response = await axios.get(`${backendUrl}/contact`);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
      alert("Failed to fetch users.");
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Users</h3>
      <ul>
        {users.map((user) => (
          <motion.li
            key={user._id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col mb-2 p-2 bg-gray-50 border border-gray-200 rounded-md"
          >
            <span>
              <strong>Username:</strong> {user.username}
            </span>
            <span>
              <strong>Email:</strong> {user.email}
            </span>
            <span>
              <strong>Phone:</strong> {user.phone}
            </span>
            <span>
              <strong>Message:</strong> {user.message}
            </span>
            <span>
              <strong>Address:</strong> {user.address}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetails;
