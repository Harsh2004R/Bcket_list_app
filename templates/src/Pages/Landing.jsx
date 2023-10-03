import React from 'react';
import { Link } from 'react-router-dom'; 
import "./animation.css"
function Landing() {
  return (
   <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-green-400">
      <div className="max-w-3xl mx-auto p-8 rounded-lg shadow-lg bg-white">
        <h1 className="text-4xl font-semibold mb-4 text-center text-gray-800">My Bucket List</h1>
        <p className="text-xs sm:text-lg md:textlg lg:text-lg xl:text-lg text-justify text-gray-600 mb-3">
          Explore your dreams, set your goals, and start ticking off your bucket list items.
        </p>
        <p className="text-lg text-right text-blue-700  mb-3" style={{fontSize:"12px"}}>
          -by Harsh Sharma
        </p>
        <div className="flex justify-center">
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold mr-4 transition duration-300"
          >
            Log In
          </Link>
          <Link
            to="/email_valid?" 
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default Landing;