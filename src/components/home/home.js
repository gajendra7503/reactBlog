import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Home.module.css'; // Import the CSS specific to the Login component

const Home = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("/auth/login", { email, password });
        onLogin(res.data.token); // Pass token to App for state update
        navigate("/dashboard");
      } catch (err) {
        alert(err.response?.data?.message || "Login failed. Please try again.");
      }
    };

  return (
        <h1>this is home page</h1>
  );
};

export default Home;