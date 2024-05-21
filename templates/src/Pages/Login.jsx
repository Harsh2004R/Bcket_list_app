import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');


  // Create the object with the user data
  const userData = {
    email: email,
    password: password
  };


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://bucket-be2k24.onrender.com/users/login', userData);
      console.log('Response from server:', response.data); // Log the response

      if (response.data.token) {
        const userID = response.data.userId
        // console.log('Login successful, token received:', response.data.token, "userID", response.data.userId); // Log the token
        console.log("login successful")
        // Navigate to a different page upon successful login
        navigate(`/bucket/${userID}`);
      } else {
        console.log('Login failed, response data:', response.data); // Log failure case
        setAlertMessage(response.data.msg || 'Login failed');
      }
    } catch (error) {
      console.log('Error occurred during login:', error); // Log the error
      setAlertMessage('An error occurred during login. Please try again.');
    }
  }
  const handleAlertClose = () => {
    setAlertMessage('');
  };


  return (
    <>
      <div className=" min-h-screen flex items-center justify-center "
        style={{ backgroundColor: '#232323' }}
      >

        <div className=" p-4 py-16 rounded-lg shadow-lg w-90%  sm:w-96" style={{ backgroundColor: '#232323', boxShadow: "3px 3px #3aa16e, -1em 0 .4em #00a0ff" }}>
          <h2 className="text-4xl font-semibold text-center mb-6 " style={{ color: '#FFFFFF' }}>Log In</h2>
          <form>
            <div className="mb-6">
              <label className="block font-medium" style={{ color: "#FFFFFF" }}>Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-500"
                placeholder="john@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ background: "transparent", borderColor: "transparent", color: "#fff" }}
              />
            </div>
            <div className="mb-6">
              <label className="block font-medium" style={{ color: "#FFFFFF" }}>Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-500"
                placeholder="********"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ background: "transparent", borderColor: "transparent", color: "#fff" }}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600 transition duration-300"
              style={{ background: "transparent", boxShadow: "3px 3px #3aa16e, -0.2em 0 .4em " }}
              onClick={handleLogin}
            >
              Log In
            </button>
          </form>
          <p className="mt-4  text-sm text-center" style={{ color: "#FFFFFF" }}>
            Don't have an account? <a href="/signup" style={{ color: "#3aa16e" }}

            >Sign Up</a>
          </p>
        </div>
      </div>
      {alertMessage && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-opacity-50 bg-black z-50">
          <div className="p-4 rounded-md shadow-lg" style={{ backgroundColor: "#666666" }}>
            <p style={{ color: "#fff" }}>{alertMessage}</p>
            <button onClick={handleAlertClose} className="mt-2 text-white py-1 px-2 rounded-md " style={{ backgroundColor: "#4085bf" }}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
