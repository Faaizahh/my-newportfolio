import React, { useState } from "react";
import "./navbar.css";
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6";
import { TbMessage } from "react-icons/tb";

function Navbar() {
  const [activeNav, setActivenNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActivenNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <IoHomeOutline />
      </a>

      <a
        href="#about"
        onClick={() => setActivenNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <CiUser />
      </a>

      <a
        href="#experience"
        onClick={() => setActivenNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <FaBook />
      </a>

      <a
        href="#testimonials"
        onClick={() => setActivenNav("#testimonials")}
        className={activeNav === "#testimonials" ? "active" : ""}
      >
        <FaUsersLine />
      </a>

      <a
        href="#contact"
        onClick={() => setActivenNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <TbMessage />
      </a>
    </nav>
  );
}

export default Navbar;
