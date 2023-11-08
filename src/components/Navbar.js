import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "./items/ngologo.webp";

export default function Navbar() {
    const [classn, setclass] = useState("");
    let comenav = () => {
        let windowWidth = window.innerWidth;
        if(windowWidth<=704){
            let navdispaly = document.querySelector(".navigation");
            if (classn !== "closenav") {
                setclass("closenav");
                navdispaly.style.display = "block";
            }
            else {
                setclass("");
                navdispaly.style.display = "none";
            }
        }
    }

    return (
        <div>
            <nav className="navbar">
                <div className="logo"><Link to="/" smooth={true} duration={1000}><img src={logo} alt="Rishu Infoworld" /></Link></div>
                <div className="navigation">
                    <ul className='navigationlist'>
                        <li className="navitem"><Link to="/" smooth={true} duration={1000} onClick={comenav}>Home</Link></li>
                        <li className="navitem"><Link to="/about" smooth={true} duration={1000} onClick={comenav}>About Us</Link></li>
                        <li className="navitem"><Link to="/Certificates" smooth={true} duration={1000} onClick={comenav}>Our Certificates</Link></li>
                        <li className="navitem"><Link to="/Recognition" smooth={true} duration={1000} onClick={comenav}>Recognition</Link></li>
                        <li className="navitem"><Link to="/Donate" smooth={true} duration={1000} onClick={comenav}>Donate</Link></li>
                    </ul>
                </div>
                <div id="opennav" className={classn} onClick={comenav}></div>
            </nav>
        </div>
    )
}
