import React, { useState } from "react";
import { Link } from "react-router-dom";
import BASE_URL from "../../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        name,
        email,
        password,
      };
      const response = await axios.post(`${BASE_URL}/register, userData`);
      console.log(response);
      if (response.data.success) {
        alert(response.data.message);
        navigate("/MainPage");
        localStorage.setItem("username", response.data.userName);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during signup. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full transform transition-all hover:scale-105"
      >
        <h2 className="text-4xl font-bold mb-6 text-gray-700">
          Create an Account
        </h2>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-4 focus:ring-teal-400 transition duration-300 shadow-sm hover:shadow-md"
          required
        />
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
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-4 focus:ring-teal-400 transition duration-300 shadow-sm hover:shadow-md"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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