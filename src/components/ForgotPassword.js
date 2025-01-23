import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setMessage("Passwords do not match");
      navigate("/login");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/forgot-password", {
        email,
        newPassword,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Reset Password</h2>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>New Password</label>
          <input
            type="password"
            placeholder="Enter New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Confirm New Password</label>
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Update Password</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default ForgotPassword;
