import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "./Navbar";
import Gallery from "./Gallery";
import newsimg from "./items/newsimg.webp";
import memberl from "../data/members.json";
import "./Recognition.css";
import Footer from "./Footer";

function Members({ members }) {
  return (
    <div className="memberbox">
      {Array.isArray(members) &&
        members.map((element, index) => (
          <div className="member text-center" key={index}>
            <div className="memberimg my-4"></div>
            <h5>{element.name}</h5>
            <p>{element.post}</p>
          </div>
        ))}
    </div>
  );
}

export default function Recognition() {
  const [member, setMember] = useState([]);

  useEffect(() => {
    setMember(Object.values(memberl));
  }, []);

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
      <section className="membersec">
        <h1 className="position-relative py-1 mx-3 ">Members</h1>
        <Members members={member} />
      </section>

      <Footer />
    </div>
    </>
  );
}
