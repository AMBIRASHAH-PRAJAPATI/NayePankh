import { Link } from "react-scroll";
import React from "react";
import Card from "react-bootstrap/Card";
import fundr from "./items/fundraiseicon.png";
import donate from "./items/donateicon.png";
import volunteer from "./items/volunteer.png";

function Feature() {
  const featureImages = [donate, fundr, volunteer];

  return featureImages.map((element, i) => (
    <Card key={i} style={{ width: "22rem", borderRadius: "0px" }}>
      <Card.Img variant="top" src={element} className="mx-3" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="home" smooth={true} duration={1000}>
          {" "}
          <span>Read More</span>
        </Link>
      </Card.Body>
    </Card>
  ));
}

export default function Features() {
  return (
    <section id="featuressec" className="d-flex justify-content-center">
      <div
        id="featurescontainer"
        className="d-flex justify-content-center flex-wrap shadow p-1 mb-5 bg-white"
      >
        <Feature />
      </div>
    </section>
  );
}

// <div className="feature">
// <img src="" alt="" className="ficon" />
// <h3 className="fheading">Heading</h3>
// <span></span>
// </div>
// <div className="feature">
// <img src="" alt="" className="ficon" />
// <h3 className="fheading">Heading</h3>
// <span></span>
// </div>
// <div className="feature">
// <img src="" alt="" className="ficon" />
// <h3 className="fheading">Heading</h3>
// <span></span>
// </div>

// const featurebox = ()=>{
//     array.forEach(element => {
//         return (
//             <div className="featurebox">
//                 <div className="featureimg">
//                     <img src={element.img} alt={element.alt} />
//                 </div>
//                 <div className="featurecontent">
//                     <h2>{element.heading}</h2>
//                     <p>{element.para}</p>
//                     <span>Read More</span>
//                 </div>
//             </div>
//         )

//     });
// }
