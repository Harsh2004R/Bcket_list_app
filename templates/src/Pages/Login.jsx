import React from 'react';
const backgroundImage = "https://img.freepik.com/premium-vector/abstract-blue-wavy-with-blurred-light-curved-background_41814-240.jpg?size=626&ext=jpg&ga=GA1.1.1559264531.1691417508&semt=sph"
function Login() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };
  return (
    <div className=" min-h-screen flex items-center justify-center " style={backgroundStyle}>

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
              style={{ background: "transparent", borderColor: "transparent", color: "#fff"  }}
            />
          </div>
          <div className="mb-6">
            <label className="block font-medium" style={{ color: "#FFFFFF" }}>Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-500"
              placeholder="********"
              required
              style={{ background: "transparent", borderColor: "transparent", color: "#fff"  }}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600 transition duration-300"
            style={{ background: "transparent", boxShadow: "3px 3px #3aa16e, -0.2em 0 .4em " }}
          >
            Log In
          </button>
        </form>
        <p className="mt-4  text-sm text-center" style={{ color: "#FFFFFF" }}>
          Don't have an account? <a href="/signup" style={{ color: "#3aa16e" }}>Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
