import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../config";
import Alert from "../Alert"; // Import the Alert component

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState(null); // State for alert message
  const [alertType, setAlertType] = useState(""); // State for alert type
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        email,
        password,
      };

      const response = await axios.post(`${BASE_URL}/login`, userData);
      console.log("Received response:", response.data.user?.name);

      if (response.data.success) {
        console.log("Login successful");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.user.id);
        localStorage.setItem("username", response.data.user.name);
        setAlertMessage("Login successful!");
        setAlertType("success");
        navigate("/MainPage");
      } else {
        console.log("Login failed");
        setAlertMessage(response.data.message);
        setAlertType("error");
      }
    } catch (error) {
      console.error("Error during login:", error);
      const errorMessage =
        error.response?.data?.message || "An error occurred. Please try again.";
      if (error.response?.status === 400) {
        setAlertMessage("Invalid Email");
        setAlertType("error");
      } else if (error.response?.status === 401) {
        setAlertMessage("Invalid Password");
        setAlertType("error");
      } else {
        setAlertMessage(errorMessage);
        setAlertType("error");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full transform transition-all hover:scale-105"
      >
        <h2 className="text-4xl font-bold mb-6 text-gray-700">Welcome Back</h2>
        {alertMessage && <Alert message={alertMessage} type={alertType} />}{" "}
        {/* Render the alert */}
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-4 focus:ring-teal-400 transition duration-300 shadow-sm hover:shadow-md"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-4 focus:ring-teal-400 transition duration-300 shadow-sm hover:shadow-md"
          required
        />
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg w-full text-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg"
        >
          Sign In
        </button>
        <div className="text-center mt-6">
          <Link
            to="/forgot-password"
            className="text-teal-500 hover:text-teal-600 font-semibold transition duration-300"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-teal-500 hover:text-teal-600 font-semibold transition duration-300"
            >
              Create one
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
