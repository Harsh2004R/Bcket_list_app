
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ValidEmail() {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState({ message: '', data: null });
  const navigate = useNavigate();

  const checkEmailValidity = async () => {
    try {
      // Abstract API key
      const apiKey = '39ccf8a027da49c4a864da06caf0d4ec';
      // Make a GET request to the Abstract API
      const response = await fetch(
        `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`
      );

      const data = await response.json();

      // Display both the message and the JSON response
      setResult({
        message: data.deliverability === 'UNDELIVERABLE' ? `Email ${email} does not exist` : `Email ${email} exists`,
        data: JSON.stringify(data, null, 2),
      });

    } catch (error) {
      setResult({ message: 'An error occurred while checking the email.', data: null });
    }
  };

  // Determine if the "Sign Up" button should be enabled
  const isButtonEnabled = email !== '' && result.message === `Email ${email} exists`;

  const handleSignUpPage = () => {
    navigate(`/signup?email=${encodeURIComponent(email)}`);
  }

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "#232323" }}>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Email Validation Page!</h1>
        <p className="text-sm mt-2 py-1 text-cyan bg-gradient-to-r from-blue-700 to-green-800"   >
          This page will validate your email, that provided email exists somewhere or not? To proceed kindly fill your valid email here.
        </p>
        <div className="space-y-10 mt-10">
          <input
            className="px-4 py-2  text-white border rounded" style={{ backgroundColor: "#2e2a32", border: "none" }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter a valid email address"
          />
          <button
            className="block px-4 py-2 bg-transparent text-white rounded hover:bg-teal-600" style={{ border: "0.5px solid #fff", borderRadius: "15px" }}
            onClick={checkEmailValidity}
          >
            Check Email
          </button>
          <div className="border  transition-transform duration-1000 hover:cursor-pointer w-90 md:w-58 h-60vh md:h-60.5vh overflow-auto p-4 bg-gray-1000 rounded-none scrollbar-thin scrollbar-thumb-red scrollbar-track-gray" style={{ border: "0.5px solid #fff", borderRadius: "15px" }}>
            <h2 className="text-center text-white">Result <span className="text-red-500">?</span></h2>

            {/* {isButtonEnabled ? (
              <p className="text-white py-2" style={{ fontSize: "20px", textAlign: "center", color: "#0693e3" }}>Scroll down for signup...</p>
            ) : (
              <p className="hidden"></p>
            )} */}
            <p className="text-white">{result.message}</p>
            <p className="whitespace-pre-wrap" style={{ color: "cyan" }}>{result.data}</p>
            <div className="flex justify-center">
              <button
                className={`mt-20 mb-20 px-4 py-2 bg-teal-500 text-white ${!isButtonEnabled && 'opacity-50 cursor-not-allowed'}`}
                onClick={handleSignUpPage}
                disabled={!isButtonEnabled}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValidEmail;
