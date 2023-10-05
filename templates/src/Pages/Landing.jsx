import React from 'react';
import { Link } from 'react-router-dom'; 
function Landing() {
  return (
   <>
    <div className="min-h-screen flex items-center justify-center " style={{background: 'linear-gradient(to right, #333333, #111111)'}} >
      <div className="max-w-3xl  mx-auto xs:p-8 xl:p-12 rounded-lg shadow-lg " style={{ backgroundColor: '#232323', boxShadow: "3px 3px #3aa16e, -1em 0 .4em #00a0ff" }}>
        <h1 className="text-4xl font-semibold mb-4 text-center text-white"><span style={{color:"#3B82F6",fontStyle:"italic" }}>B</span>ucket - <span style={{color:"#22C55E",fontStyle:"italic" }}>W</span>ish</h1>
        <p className="text-xs sm:text-lg md:textlg lg:text-lg xl:text-lg text-justify text-white mb-3" >
          Explore your dreams, set your goals, and start ticking off your bucket list items.
        </p>
        <p className="text-lg text-right  mb-3" style={{fontSize:"12px",color:"#999"}}>
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