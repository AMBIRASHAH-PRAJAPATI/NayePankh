import React from "react";
import fotimg from "./items/img5.webp";
export default function Footer() {
  return (
    <footer className="d-flex justify-content-between align-items-center flex-wrap" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
      <div className="fotinfo">
        <h1>Get in touch</h1>
        <p>Feel free to contact us</p>
        <p>Office Address: 104A/279 P.Road Kanpur </p>
        <p>WhatsApp: +91-6306266557</p>
        <p>Calling: <a href="tel:+91-8318500748">+91-8318500748</a></p>
        <p>career@nayepankh.com</p>
        <span>
        <a href="#"><i class="fa-brands fa-facebook"></i></a>
        </span>
        <span>
        <a href=""><i class="fa-brands fa-instagram"></i></a>
        </span>
        <span>
        <a href=""><i class="fa-brands fa-twitter"></i></a>
        </span>
        <span>
        <a href=""><i class="fa-brands fa-linkedin"></i></a>
        </span>
      </div>
      <div className="fotimg">
        <img src={fotimg} alt="" />
      </div>
    </footer>
  );
}
