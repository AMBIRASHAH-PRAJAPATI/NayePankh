import React from "react";
import img1 from "./items/upcom1.jpg";
import img2 from "./items/img14.jpg";
import img3 from "./items/img11.webp";
import img4 from "./items/mission1.jpg";

export default function Welcome() {
  return (
    <div
      id="welcome"
      className="d-flex justify-content-center align-items-center"
    >
      <div className="welcomcontent py-4 " data-aos="fade-up">
        <h1>Welcome to</h1>
        <h1> NayePankh Fpoundation</h1>
        <h3>UP GOVT. | 80G & 12A Registered</h3>
        <div>
          <p>
            We are one of the Biggest Student led NGO of India with its
            operations extended in the city of Kanpur, Ghaziabad and various
            other cities.
          </p>
        </div>
      </div>
      <img src={img1} alt="" id="wlimg1" />
      <img src={img2} alt="" id="wlimg2" />
      <img src={img3} alt="" id="wlimg3" />
      <img src={img4} alt="" id="wlimg4" />
    </div>
  );
}
