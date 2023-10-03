import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
function SignUp() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const emailFromParams = searchParams.get('email') || '';
  return (
    <div className=" min-h-screen flex items-center justify-center " style={{ backgroundColor: '#232323' }}>

      <div className=" p-8 rounded-lg shadow-lg w-90%  sm:w-96" style={{ backgroundColor: '#232323' ,boxShadow:"3px 3px #3aa16e, -1em 0 .4em #00a0ff"}}>
        <h2 className="text-4xl font-semibold text-center mb-6 " style={{ color: '#FFFFFF' }}>Sign Up</h2>
        <form>
          <div className="mb-4" >
            <label className="block  font-medium" style={{color:"#FFFFFF"}}>Full Name</label>
            <input
              type="text"
              className="w-full border border-green-300 p-2 rounded-md focus:ring focus:ring-blue-500" 
              placeholder="John Doe"
              required
              style={{background:"transparent", borderColor: "transparent", color: "#fff"  }}
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium" style={{color:"#FFFFFF"}}>Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-500"
              // placeholder="john@example.com"
              value={emailFromParams}
              required
              
              style={{background:"transparent", borderColor: "transparent", color: "#fff"  }}

            />
          </div>
          <div className="mb-6">
            <label className="block font-medium" style={{color:"#FFFFFF"}}>Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-500"
              placeholder="Your ********"
              required
              style={{background:"transparent", borderColor: "transparent", color: "#fff"  }}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            style={{background:"transparent",boxShadow:"3px 3px #3aa16e, -0.2em 0 .4em " }}
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4  text-sm text-center" style={{color:"#FFFFFF"}}>
          Already have an account? <a href="/login" style={{color:"#3aa16e"}}>Log in</a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
