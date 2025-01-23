import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/Dashboard';
import ForgotPassword from './components/ForgotPassword';
import axios from "axios";

// Set the base URL for Axios
axios.defaults.baseURL = "http://localhost:5000/api";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check token validity on app load
  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          await axios.post("/auth/validate", { token });
          setIsAuthenticated(true);
        } catch {
          localStorage.removeItem("token");
          setIsAuthenticated(false);
        }
      }
    };
    validateToken();
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <Dashboard onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Default Redirect */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}
export default App;
