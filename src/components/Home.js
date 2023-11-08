import React from "react";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <div id="home" className="d-flex justify-content-center align-items-center">
      <div className="contentbox text-center p-2">
        <h1 className="homeheading my-2" data-aos="zoom-in">
          It's that easy to bring a Smile on Their Faces
        </h1>
        <p className="homepara my-4" data-aos="zoom-in">
          Help today because tomorrow you may be the one who needs helping!
          Forget what you can get and see what you can give.
        </p>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <Button variant="warning" className="homebtn">
            Join With us
          </Button>{" "}
          <Button variant="warning" className="homebtn">
            Donate Now
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
