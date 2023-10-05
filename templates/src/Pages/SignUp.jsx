// import React,{useState} from 'react';
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// import axios from 'axios';
// function SignUp() {
//   const location = useLocation();
//   const history = useNavigate();
//   const searchParams = new URLSearchParams(location.search);
//   const emailFromParams = searchParams.get('email') || '';
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: emailFromParams,
//     password: '',
//   });


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Send a POST request to your JSON server
//       const response = await axios.post('http://localhost:8080/users', formData);

//       // Assuming your server responds with the newly created user, you can handle success here.
//       console.log('User created:', response.data);

//       // Redirect to login page or any other page as needed
//       history('/login');
//     } catch (error) {
//       console.error('Error creating user:', error);
//       // Handle error here
//     }
//   };
//   return (
//     <div className=" min-h-screen flex items-center justify-center " style={{ backgroundColor: '#232323' }}>
//       <div className=" p-8 rounded-lg shadow-lg w-90%  sm:w-96" style={{ backgroundColor: '#232323', boxShadow: "3px 3px #3aa16e, -1em 0 .4em #00a0ff" }}>
//         <h2 className="text-4xl font-semibold text-center mb-6 " style={{ color: '#FFFFFF' }}>Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block font-medium" style={{ color: "#FFFFFF" }}>Full Name</label>
//             <input
//               type="text"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               className="w-full border border-green-300 p-2 rounded-md focus:ring focus:ring-blue-500"
//               placeholder="John Doe"
//               required
//               style={{ background: "transparent", borderColor: "transparent", color: "#fff" }}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block font-medium" style={{ color: "#FFFFFF" }}>Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-500"
//               required
//               style={{ background: "transparent", borderColor: "transparent", color: "#fff" }}
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block font-medium" style={{ color: "#FFFFFF" }}>Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-500"
//               placeholder="Your ********"
//               required
//               style={{ background: "transparent", borderColor: "transparent", color: "#fff" }}
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
//             style={{ background: "transparent", boxShadow: "3px 3px #3aa16e, -0.2em 0 .4em " }}
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="mt-4  text-sm text-center" style={{ color: "#FFFFFF" }}>
//           Already have an account? <a href="/login" style={{ color: "#3aa16e" }}>Log in</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default SignUp;











import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
function SignUp() {
  const location = useLocation();
  const history = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const emailFromParams = searchParams.get('email') || '';
  const [formData, setFormData] = useState({
    fullName: '',
    email: emailFromParams,
    password: '',
  });
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleAlertClose = () => {
    setAlertMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if the email already exists in the database
      const existingUser = await axios.get(`http://localhost:8080/users?email=${formData.email}`);

      if (existingUser.data.length > 0) {
        // If the email exists, show a custom alert message
        setAlertMessage("You can't use the same email to create multiple accounts.");
      } else {
        // If the email is not found, proceed to create the user
        const response = await axios.post('http://localhost:8080/users', formData);

        // Assuming your server responds with the newly created user, you can handle success here.
        console.log('User created:', response.data);

        // Show a congratulations message
        setAlertMessage('Congratulations! Your account has been created.');

        // Redirect to login page or any other page as needed
        history('/login');
      }
    } catch (error) {
      console.error('Error creating user:', error);
      // Handle error here
    }
  };
  return (
    <div className=" min-h-screen flex items-center justify-center " style={{ backgroundColor: '#232323' }}>
      <div className=" p-8 rounded-lg shadow-lg w-90%  sm:w-96" style={{ backgroundColor: '#232323', boxShadow: "3px 3px #3aa16e, -1em 0 .4em #00a0ff" }}>
        <h2 className="text-4xl font-semibold text-center mb-6 " style={{ color: '#FFFFFF' }}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-medium" style={{ color: "#FFFFFF" }}>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-green-300 p-2 rounded-md focus:ring focus:ring-blue-500"
              placeholder="John Doe"
              required
              style={{ background: "transparent", borderColor: "transparent", color: "#fff" }}
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium" style={{ color: "#FFFFFF" }}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-500"
              required
              style={{ background: "transparent", borderColor: "transparent", color: "#fff" }}
            />
          </div>
          <div className="mb-6">
            <label className="block font-medium" style={{ color: "#FFFFFF" }}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-500"
              placeholder="Your ********"
              required
              style={{ background: "transparent", borderColor: "transparent", color: "#fff" }}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            style={{ background: "transparent", boxShadow: "3px 3px #3aa16e, -0.2em 0 .4em " }}
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4  text-sm text-center" style={{ color: "#FFFFFF" }}>
          Already have an account? <a href="/login" style={{ color: "#3aa16e" }}>Log in</a>
        </p>
      </div>
      {alertMessage && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-opacity-50 bg-black z-50">
          <div className=" p-4 rounded-md shadow-lg" style={{backgroundColor:"#666666"}}>
            <p style={{color:"#fff"}}>{alertMessage}</p>
            <button onClick={handleAlertClose}  className="mt-2 text-white py-1 px-2 rounded-md " style={{backgroundColor:"#4085bf"}}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;
