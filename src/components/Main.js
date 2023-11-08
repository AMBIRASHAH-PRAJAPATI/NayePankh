import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Features from "./Features";
import Events from "./Events";
import Welcome from "./Welcome";
import Team from "./Team";
import Footer from "./Footer";

export default function Main() {
  return (
    <div>
    <Navbar />
      <Home />
      <Features />
      <Welcome />
      <Events />
      <Team />
      <Footer />
    </div>
  );
}
