import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './login.module.css'; // Import the CSS specific to the Login component

const Login = ({ onLogin }) => {
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
    <div className="container">
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Hi, Welcome Back! 👋</h2>
      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="example@gmail.com"
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
      <div className="options">
        <label>
          <input type="checkbox" />
          Remember Me
        </label>
        <a href="/forgot-password" className="forgot-password">
          Forgot Password?
        </a>
      </div>
      <button type="submit" className="btn">Login</button>
      <div className="switch-auth">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
    </form>
  </div>
  );
};

export default Login;
