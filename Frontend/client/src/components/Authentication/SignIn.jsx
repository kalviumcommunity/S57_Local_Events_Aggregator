import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../config";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        email,
        password,
      };

      const response = await axios.post(`${BASE_URL}/login`, userData);
      console.log("Received response:", response.data);

      if (response.data.success) {
        console.log("Login successful");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.user.id); 

        navigate("/MainPage")
          .then(() => {
            alert("Login successful!");
          })
          .catch((error) => {
            console.error("Navigation failed:", error);
            alert(response.data.message);
          });
      } else {
        console.log("Login failed");
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert(
        response.data.message|| "An error occurred. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full"
        >
          Sign In
        </button>
        <div className="text-center mt-4">
          <Link to="/forgot-password" className="text-blue-600">
            Forgot Password?
          </Link>
        </div>
        <div className="text-center mt-4">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600">
              Create one
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
