import "./App.css";
import { BrowserRouter as Router, Routes, Route, useActionData } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Aboutus from "./components/Aboutus";
import Main from "./components/Main";
import Recognition from "./components/Recognition";
import Gototop from "./components/Gototop";
import Loginsinup from "./components/loginsignup";
import Certtificate from "./components/Certtificate";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Auth, auth } from "./Firebase";
AOS.init({
  once: true, // Animation should happen only once
  duration: 1700, // Minimum duration of 3000ms (3 seconds)
  easing: "ease", // Default easing for AOS animations
});

function App() {

  const [username, setusername] = useState("");
  useEffect(() => { 
    auth.onAuthStateChanged((user) => {
      if (user) {
        setusername(user.displayName)
      } else {
        setusername("");
      }
    });
  }, []);

  const handleScroll = () => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/NayePankh" element={<Main />} />
          <Route path="/Signin" element={<Loginsinup />} />
          <Route exact path="/" element={<Main />} />
          <Route exact path="/about" element={<Aboutus />} />
          <Route exact path="/Certificates" element={<Certtificate />} />
          <Route exact path="/Recognition" element={<Recognition />} />
        </Routes>
        <Gototop />
      </Router>
    </>
  );
}

export default App;
