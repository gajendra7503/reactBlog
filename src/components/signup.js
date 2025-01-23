import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import aesEncryption from '../services/aesEncryption ';
import "./signup.css";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }
    //   const requestData = { username, email, password };
    // const encryptedRequest = AesEncryptionService.encrypt(requestData);
    
      try {
        // await axios.post("/auth/signup", {data:encryptedRequest});
        await axios.post("/auth/signup", {username, email, password  }); // Only these fields
        alert("Signup successful! Please log in.");
        navigate("/login");
      } catch (err) {
        alert(err.response?.data?.message || "Signup failed. Please try again.");
      }
    };
    
  
  return (
    <div className="container">
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Connect with your friends today!</h2>
      <div className="input-group">
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter Your Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Your Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        
      <button type="submit" className="btn">Sign Up</button>
      <div className="switch-auth">
          Already have an account? <Link to="/login">Login</Link>
        </div>
    </form>
  </div>
  );
};

export default Signup;
