import React, { useEffect, useState } from "react";
import "./Aboutus.css";
import "../index.css"
import Navbar from "./Navbar";
import Button from "react-bootstrap/Button";
import volunteersl from "../data/volunteer.json";
import Footer from "./Footer";
import img1 from "./items/whoweare.jpg";
import img2 from "./items/img6.jpg";
// import volunteer from './items/volunteerpic.jpeg'
import volunteer from "./items/vol3.jpg";
import SVGRenderer from "./SVGRenderer"; // Assuming you have the SVGRenderer component as mentioned before
import svgsData from "../data//svgs.json";

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

export default function Aboutus() {
  const [volunteers, setvolunteers] = useState([]);
  useEffect(() => {
    setvolunteers(Object.values(volunteersl));
  }, []);

  // SVg
  const [svgData, setSvgData] = useState(svgsData);

  return (
    <>
     <Navbar />
    <div id="about" className="about">
      <div id="abouthead">
        <div>
          <h1>About Us</h1>
          <p>
            Help today because tomorrow you may be the one who needs more
            helping!
          </p>
          <Button variant="warning" className="homebtn">
            members
          </Button>
        </div>
      </div>
      <div className="whower d-flex justify-content-center align-items-center flex-wrap py-5 px-3">
        <div className="whoweimg">
          <img src={img1} alt="" />
        </div>
        <div className="who1dis" data-aos="zoom-in">
          <h1>You are definitely intrigued to discover who we are.</h1>
          <p>
            The secret to happiness lies in helping others. Never underestimate
            the difference YOU can make in the lives of the poor, the abused and
            the helpless.
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-wrap px-5" id="howwestart">
        <div
          className="px-3"
          id="howwedis"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <h1>How it started?</h1>
          <p>
            As we all know, 2020 was a year the world was striving to survive
            the global pandemic of covid-19. During these dire times we felt an
            urge to make an impact with whatever we had, and so we tried!! We
            tried to uplift the underprivileged and help the needy with all our
            resources and material we could arrange, it was tough but we didn't
            lose our hope and kept going in order to bring a change everyone was
            expecting the bigger authorities to bring in the societies on
            smaller levels. We started off as a group of bunch of highschoolers
            but now are a team of numerous people from different parts of the
            city and state! 28th March 2021, the day we officially landed on the
            ground to serve our duties as the youth of the most rapidly
            progressing nation afterall, the main hope of a nation lies in the
            arms of its youth.
          </p>
        </div>
        <div className="howweimg">
          <img src={img2} alt="" />
        </div>
      </div>

      <div className="px-5" id="whatis">
        <h1 data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          What is NayePankh?
        </h1>
        <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          Nayepankh foundation was initiated to bring a change and help people
          during the tough times of Covid. Later in the year, the NGO started to
          expand their operations and provide help to a wider section of the
          society. With this revamped vision, the NGO acquired the name of
          NayePankh - giving wings to uplift the underprivileged section of our
          society. NayePankh is one of the eminent NGOs espoused in providing
          food, sanitary napkins, clothes, educating underprivileged sectors of
          our society for the better future. We make efforts to solve daily
          problems faced by people of India. Most of the young women feel
          humiliating in public places during their menstrual cycle; to bring
          change we create awareness campaigns among woman and youths about
          personal hygiene, providing sanitary napkins. Also, in our endeavour
          to fight hunger we distribute food not only to the underprivileged
          community but also to the stray animals. We are also providing clothes
          to the poor families. Till date we have helped more than two lakhs of
          people. Although this seems quite a big achievement, but our goal is
          still not complete, therefore we're continuing more with hustle. When
          lockdown was hitting hard, we took a decision and now we are a 12A and
          80G certified NGO (that means if someone donates to NayePankh they
          will get a relief of 50%in income tax). The most striking feature
          about us is that we are completely led by the youths of our country,
          many of whom are still in their colleges and schools. We are on a
          mission to make this earth a better place to live for all creatures.
          We are here as 'BADALTE BHARAT KI NAYI TASVEER'!!
        </p>
      </div>
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
                {"  "} Joining is tottaly free. We dont need any money from you.{" "}
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
