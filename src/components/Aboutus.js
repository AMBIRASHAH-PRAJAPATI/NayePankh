import React, { useEffect, useState } from "react";
import "./Aboutus.css";
import "../index.css";
import Navbar from "./Navbar";
import Button from "react-bootstrap/Button";
import Footer from "./Footer";
import img1 from "./items/whoweare.jpg";
import img2 from "./items/img6.jpg";
import memberl from "../data/members.json";
// import volunteer from './items/volunteerpic.jpeg'

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

export default function Aboutus() {
  const [member, setMember] = useState([]);

  useEffect(() => {
    setMember(Object.values(memberl));
  }, []);

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
              The secret to happiness lies in helping others. Never
              underestimate the difference YOU can make in the lives of the
              poor, the abused and the helpless.
            </p>
          </div>
        </div>
        <div
          className="d-flex justify-content-center align-items-center flex-wrap px-5"
          id="howwestart"
        >
          <div
            className="px-3"
            id="howwedis"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <h1>How it started?</h1>
            <p>
              As we all know, 2020 was a year the world was striving to survive
              the global pandemic of covid-19. During these dire times we felt
              an urge to make an impact with whatever we had, and so we tried!!
              We tried to uplift the underprivileged and help the needy with all
              our resources and material we could arrange, it was tough but we
              didn't lose our hope and kept going in order to bring a change
              everyone was expecting the bigger authorities to bring in the
              societies on smaller levels. We started off as a group of bunch of
              highschoolers but now are a team of numerous people from different
              parts of the city and state! 28th March 2021, the day we
              officially landed on the ground to serve our duties as the youth
              of the most rapidly progressing nation afterall, the main hope of
              a nation lies in the arms of its youth.
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
            during the tough times of Covid. Later in the year, the NGO started
            to expand their operations and provide help to a wider section of
            the society. With this revamped vision, the NGO acquired the name of
            NayePankh - giving wings to uplift the underprivileged section of
            our society. NayePankh is one of the eminent NGOs espoused in
            providing food, sanitary napkins, clothes, educating underprivileged
            sectors of our society for the better future. We make efforts to
            solve daily problems faced by people of India. Most of the young
            women feel humiliating in public places during their menstrual
            cycle; to bring change we create awareness campaigns among woman and
            youths about personal hygiene, providing sanitary napkins. Also, in
            our endeavour to fight hunger we distribute food not only to the
            underprivileged community but also to the stray animals. We are also
            providing clothes to the poor families. Till date we have helped
            more than two lakhs of people. Although this seems quite a big
            achievement, but our goal is still not complete, therefore we're
            continuing more with hustle. When lockdown was hitting hard, we took
            a decision and now we are a 12A and 80G certified NGO (that means if
            someone donates to NayePankh they will get a relief of 50%in income
            tax). The most striking feature about us is that we are completely
            led by the youths of our country, many of whom are still in their
            colleges and schools. We are on a mission to make this earth a
            better place to live for all creatures. We are here as 'BADALTE
            BHARAT KI NAYI TASVEER'!!
          </p>
        </div>
        <section className="membersec">
          <h1 className="position-relative py-1 mx-3 ">Members</h1>
          <Members members={member} />
        </section>
        <Footer />
      </div>
    </>
  );
}
