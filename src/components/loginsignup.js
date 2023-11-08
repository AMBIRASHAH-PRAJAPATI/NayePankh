import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./loginsignup.css";
import logsinupright from "../components/items/img7.webp";
import Vector from "../assets/Vector.svg";
import logo from "../components/items/ngologo.webp";
import Login from "./login";
import Signup from "./signup";
// import ProtectedRoute from "./ProtectedRoute";
// import Signin from "./signin";

export default function Loginsinup() {
  return (
    <div id="main1st">
      <div className="logboard shadow-lg">
        <div className="logleft">
          <div className=" d-flex justify-content-center align-items-cente ">
            <img src={logo} alt="NAYAPANKH" />
          </div>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="signup" element={<Signup />} />
              </Routes>         
        </div>
        <div className="logright">
          <img id="logsinimg" src={logsinupright} alt="" />
          <img id="vector" src={Vector} alt="Go" />
        </div>
      </div>
    </div>
  );
}



// <Route path="/signinsec" element={<ProtectedRoute><Signin /></ProtectedRoute>} />
// line 25