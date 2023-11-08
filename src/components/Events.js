import React, { useEffect, useState } from 'react';
import pasteventsl from '../data/pastevent.json';
import upcomingeventsl from '../data/upcommingevents.json';
import Card from 'react-bootstrap/Card';
import up1 from "./items/upcom1.jpg";
import up2 from  "./items/upcom2.jpg";
import up3 from "./items/img14.jpg";
import p1 from "./items/img6.jpg";
import p2 from  "./items/img3.webp"
import p3 from  "./items/img5.webp"
import p4 from  "./items/img1.webp"


function Upcomingevents({ upcomingevents }) {
  const upcom =[up1, up2, up3];
  return (
    <div className="pupevent d-flex flex-wrap">
      {upcomingevents.map((element,i) => (
        <Card style={{ width: '18rem' }} key={element.id}>
        <Card.Img variant="top" src={upcom[i]} onError={() => console.log("Image not found")} />
        <Card.Body>
            <Card.Title>{element.title}</Card.Title>
            <ul>
              <li><i class="fa-solid fa-calendar-days"></i>{' '} {element.date}</li>
              <li><i class="fa-solid fa-location-dot"></i>{' '} {element.location}</li>
              <li><i class="fa-solid fa-address-card"></i>{' '} {element.post}</li>
            </ul>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

function Pastevents({ pastevents }) {
  const past = [p1,p2,p3,p4];
  return (
    <div className="pupevent d-flex flex-wrap">
      {pastevents.map((element,i) => (
        <Card style={{ width: '20rem' }} key={element.id}>
          <Card.Img variant="top" src={past[i]} />
          <Card.Body>
            <Card.Title>{element.title}</Card.Title>
            <Card.Text>{element.descripton}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default function Events() {
  const [pastevents, setpastevent] = useState([]);
  const [upcomingevents, setupcomingevents] = useState([]);

  useEffect(() => {
    setpastevent(Object.values(pasteventsl));
  }, []);
  useEffect(() => {
    setupcomingevents(Object.values(upcomingeventsl));
  }, []);

  return (
    <section id="events" className='bg-light'>
      <h1 className="text-center position-relative" >Events</h1>
      <div>
      <div className="d-flex justify-content-between"><h2>Upcoming Events</h2> <span>More</span></div>
      <Upcomingevents upcomingevents={upcomingevents} />
      </div>
      <div>
      <div className="d-flex justify-content-between ">   <h2>Past Events</h2> <span>More</span></div>
      <Pastevents pastevents={pastevents} />
      </div>
    </section>
  );
}





 // {
    //     "title": "Empowering Children Through Creativity",
    //     "descripton": "Children from underprivileged backgrounds are given the chance to explore their creativity and potential with the support of a dedicated NGO. Through interactive and fun-filled activities, these youngsters are inspired to dream big and reach for the stars, as they embark on a journey of empowerment and self-discovery.",
    //     "img":"./items/img7.webp"
    // },