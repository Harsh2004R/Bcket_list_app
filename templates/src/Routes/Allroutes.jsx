import React from 'react'
import { Routes, Route } from "react-router-dom";
import Landing from '../Pages/Landing';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Bucket from '../Pages/Bucket';

import HowItWorksVideo from '../Components/HowItWorksVideo';
function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/bucket/:userID" element={<Bucket />}></Route>

        <Route path="/how-it-works" element={<HowItWorksVideo />}></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
