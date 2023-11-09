import React from "react";
import "./loginsignup.css";
import logsinupright from "../components/items/img7.webp";
import Vector from "../assets/Vector.svg";
import logo from "../components/items/ngologo.webp";
import Login from "./login";
import Signup from "./signup";
// import ProtectedRoute from "./ProtectedRoute";
// import Signin from "./signin";

export default function Loginsinup() {
  const [isLoginOpen, setIsLoginOpen] = React.useState(true);
  return (
    <div id="main1st">
      <div className="logboard shadow-lg">
        <div className="logleft">
          <div className=" d-flex justify-content-center align-items-cente ">
            <img src={logo} alt="NAYAPANKH" />
          </div>
          {isLoginOpen ? (
            <Login setIsLoginOpen={setIsLoginOpen} />
         ) : (
            <Signup setIsLoginOpen={setIsLoginOpen} />
         )}         
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