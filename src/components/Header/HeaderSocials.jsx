import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/faiza-abdulsalam-b38923223/?trk=opento_sprofile_details">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Faaizahh">
        <FaGithub />
      </a>
    </div>
  );
}

export default HeaderSocials;
