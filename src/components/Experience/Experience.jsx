import React from "react";
import "./experience.css";
import { LuBadgeCheck } from "react-icons/lu";

function Experience() {
  return (
    <section id="experience">
      <h5>Skill Set</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div>
          <h3>Front-end Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <LuBadgeCheck className="experience__details-icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <LuBadgeCheck className="experience__details-icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <LuBadgeCheck className="experience__details-icons" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <LuBadgeCheck className="experience__details-icons" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <LuBadgeCheck className="experience__details-icons" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <LuBadgeCheck className="experience__details-icons" />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
