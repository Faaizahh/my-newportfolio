import React from "react";
import "./footer.css";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <a href="" className="footer_logo">
        FAIZA
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/_faaizah__/">
          <IoLogoInstagram />
        </a>
        <a href="https://sd.linkedin.com/in/faiza-abdulsalam-b38923223">
          <FaLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; FAIZA. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
