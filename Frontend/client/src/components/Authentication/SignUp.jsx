import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../config";
import Alert from "../Alert"; // Import the Alert component

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState(null); // State for alert message
  const [alertType, setAlertType] = useState(""); // State for alert type
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
    return regex.test(email);
  };

  const validatePassword = (password) => {
    // Check password length and complexity
    return password.length >= 6; // Example condition: Minimum 6 characters
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validations
    if (!validateEmail(email)) {
      setAlertMessage("Please enter a valid email address.");
      setAlertType("error");
      return;
    }

    if (!validatePassword(password)) {
      setAlertMessage("Password must be at least 6 characters long.");
      setAlertType("error");
      return;
    }

    if (password !== confirmPassword) {
      setAlertMessage("Passwords do not match.");
      setAlertType("error");
      return;
    }

    try {
      const userData = {
        name,
        email,
        password,
      };
      const response = await axios.post(`${BASE_URL}/register`, userData);
      console.log(response);
      if (response.data.success) {
        const userName = response.data.userName;

        // Set alert for successful signup
        setAlertMessage("Signup successful! Welcome, " + userName);
        setAlertType("success");

        // Set user context and local storage
        localStorage.setItem("username", userName);
        navigate("/MainPage");
      } else {
        // Set alert for failed signup
        setAlertMessage(
          response.data.message || "Signup failed. Please try again."
        );
        setAlertType("error");
      }
    } catch (error) {
      console.error(error);
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred during signup. Please try again.";
      setAlertMessage(errorMessage);
      setAlertType("error");
    }
  };

  // Clear alert message on input change
  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    if (alertMessage) {
      setAlertMessage(null); // Clear alert message when user starts typing
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full"
      >
        <h2 className="text-4xl font-bold mb-6 text-gray-700">
          Create an Account
        </h2>
        {alertMessage && <Alert message={alertMessage} type={alertType} />}{" "}
        {/* Render the alert */}
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={handleInputChange(setName)}
          className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-4 focus:ring-teal-400 transition duration-300 shadow-sm hover:shadow-md"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={handleInputChange(setEmail)}
          className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-4 focus:ring-teal-400 transition duration-300 shadow-sm hover:shadow-md"
          required
        />
        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={handleInputChange(setPassword)}
          className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-4 focus:ring-teal-400 transition duration-300 shadow-sm hover:shadow-md"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleInputChange(setConfirmPassword)}
          className="w-full p-4 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-4 focus:ring-teal-400 transition duration-300 shadow-sm hover:shadow-md"
          required
        />
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg w-full text-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg"
        >
          Sign Up
        </button>
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-teal-500 hover:text-teal-600 font-semibold transition duration-300"
            >
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
