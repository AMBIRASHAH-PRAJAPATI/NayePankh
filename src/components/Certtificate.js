import React from "react";
import Navbar from "./Navbar";
import "./Certificate.css";
import Footer from "./Footer";

export default function Certtificate() {
  return (
    <div>
    <Navbar />
      <div className="cqhead">
        <div className="cqhbody text-center">
          <h1 data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            "If we all do something, then together there is no problem that we
            cannot solve!"
          </h1>
          <div data-aos="fade-up"
          data-aos-anchor-placement="center-bottom">
          <h5>PRASHANT SHUKLA</h5>
          <p>Founder & President, NayePankh Foundation</p>
          </div>
          <div
            className="cqhfot  d-flex justify-content-between align-items-center flex-wrap text-start"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div>
              <p>
                All our efforts are made possible only because of your support
              </p>
            </div>
            <div>
              <p>
                Your donations are tax exempted under 80G of the Indian Income
                Tax Act
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
