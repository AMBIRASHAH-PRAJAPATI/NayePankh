import React from "react";
import Button from "react-bootstrap/Button";
import teamimg from "./items/img4.webp";
export default function Team() {
  return (
    <div id="teamsec" className="d-flex justify-content-center align-items-center px-2  ">
      <div className="team">
        <img src={teamimg} alt="NayePankh Fpoundation" />
      </div>
      <div id="aboutteam" className="p-5 bg-secondary">
        <h3>Our</h3>
        <h1>Team</h1>
        <p>
          "Join our team and make a difference in the lives of those in need. At
          NayePankh Foundation, we are committed to creating positive change and
          empowering communities. By joining our team, you will have the
          opportunity to contribute your time, skills, and ideas to help make a
          real impact. Whether you are passionate about education, health, or
          providing support during times of crisis, there is a place for you on
          our team. Join us today and be a part of an organization that is
          making a difference, one person at a time."
        </p>
        <Button variant="warning" className="homebtn">
          members
        </Button>
      </div>
    </div>
  );
}
