import React from 'react'
import Landing from '../Pages/Landing';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Bucket from '../Pages/Bucket';
import ValidEmail from '../Components/ValidEmail';
import { Routes, Route } from "react-router-dom";
function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/bucket" element={<Bucket />}></Route>
        <Route path="/email_valid?" element={<ValidEmail />}></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
