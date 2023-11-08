import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Aboutus from "./components/Aboutus";
import Main from "./components/Main";
import Recognition from "./components/Recognition";
import Gototop from "./components/Gototop";
import Loginsinup from "./components/loginsignup";
import Certtificate from "./components/Certtificate";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  once: true, // Animation should happen only once
  duration: 1700, // Minimum duration of 3000ms (3 seconds)
  easing: "ease", // Default easing for AOS animations
});

function App() {
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
          <Route path="/GetIn" element={<Loginsinup />} />
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
