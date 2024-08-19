import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "./Navbar";
import Gallery from "./Gallery";
import newsimg from "./items/newsimg.webp";
import "./Recognition.css";
import Footer from "./Footer";
import volunteer from "./items/vol3.jpg";
import volunteersl from "../data/volunteer.json";
import SVGRenderer from "./SVGRenderer"; // Assuming you have the SVGRenderer component as mentioned before
import svgsData from "../data/svgs.json";

function Volunteers({ volunteers }) {
  return (
    <div className="volunteers ">
      {volunteers.map((element) => {
        return (
          <div className="volunteer" key={element.id}>
            <img src={volunteer} alt="" />
            <div className="voldtl">
              <h5>{element.name}</h5>
              <p>{element.post}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Recognition() {
  const [volunteers, setvolunteers] = useState([]);
  useEffect(() => {
    setvolunteers(Object.values(volunteersl));
  }, []);

  // SVg
  const [svgData, setSvgData] = useState(svgsData);

  return (
    <>
      <Navbar />
      <div id="recognition">
        <section className="newssec d-flex justify-content-center align-items-center flex-wrap px-2">
          <div className="nesimg">
            <img src={newsimg} alt="" />
          </div>
          <div className="newsdis" data-aos="zoom-in">
            <h1>Think global, Act local.</h1>
            <p>
              "NayePankh Foundation" is a non governmental organisation with a
              strong desire to help the society and make it a better place for
              all, by doing everything in our power and to make our vision
              successful we would require your vital support. Service to mankind
              is the service to god. Let's revolutionise the society together!.
            </p>
            <Button variant="warning" className="homebtn">
              Join With us
            </Button>{" "}
            <Button variant="warning" className="homebtn">
              Donate Now
            </Button>{" "}
          </div>
        </section>
        <section className="gallery">
          <h1 className="position-relative py-1 my-3">Memories</h1>
          <div>
            {" "}
            <Gallery />
          </div>
        </section>

        <section id="volunteersec" className="py-5">
          <SVGRenderer svgCode={svgData.svg1} />
          <SVGRenderer svgCode={svgData.svg2} />
          <div className="text-center">
            <h1 className="position-relative">Meet Out Volunteers</h1>
            <p>Help today because tomorrow you may be the one who</p>
            <p>needs more helping!</p>
          </div>
          <div className="voulteersbox d-flex justify-content-center align-items-center flex-wrap">
            <Volunteers volunteers={volunteers} />
            <div
              className="voldiscription p-5"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h1>Become a Volunteer?</h1>
              <h3>
                Join your hand with us for a better life and beautiful future.
              </h3>
              <p>
                The secret to happiness lies in helping others. Never
                underestimate the difference YOU can make in the lives of the
                poor, the abused and the helpless.
              </p>
              <ul>
                <li>
                  {" "}
                  <i class="fa-solid fa-check px-1 "></i>
                  {"  "} We are friendly to each other.{" "}
                </li>
                <li>
                  {" "}
                  <i class="fa-solid fa-check px-1 "></i>
                  {"  "} If you join with us,We will give you free training.{" "}
                </li>
                <li>
                  {" "}
                  <i class="fa-solid fa-check px-1 "></i>
                  {"  "} Its an opportunity to help poor{" "}
                </li>
                <li>
                  {" "}
                  <i class="fa-solid fa-check px-1 "></i>
                  {"  "} children. No goal requirements.{" "}
                </li>
                <li>
                  {" "}
                  <i class="fa-solid fa-check px-1 "></i>
                  {"  "} Joining is tottaly free. We dont need any money from
                  you.{" "}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
