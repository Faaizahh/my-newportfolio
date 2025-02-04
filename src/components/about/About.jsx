import React from "react";
import "./about.css";

import { LuFolderCode } from "react-icons/lu";

function About() {
  return (
    <section id="about">
      <div>
        <h5>Learn More</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__cards">
            <article className="about__card">
              <LuFolderCode />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>

          <div className="about__content">
            <p>
              I’m passionate about crafting clean, functional websites that
              offer great user experiences. With skills in HTML, CSS,
              JavaScript, React, Bootstrap, and Sass, I create responsive,
              interactive web solutions that are both visually appealing and
              easy to use. My goal is to bring ideas to life with high-quality,
              efficient designs.
            </p>
            <div class="center">
              <a href="#contact" className="btn btn-primary">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
