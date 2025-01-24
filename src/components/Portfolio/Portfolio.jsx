import React from "react";
import "./portfolio.css";
import work_1 from "../../assets/work_1.png";
import work_2 from "../../assets/work_2.png";
import work_3 from "../../assets/work_3.png";
import work_4 from "../../assets/work_4.png";

function Portfolio() {
  const data = [
    {
      id: 1,
      image: work_1,
      title: "Website for a gadget store",
      github: "https://github.com/Faaizahh/store-website.git",
    },
    {
      id: 2,
      image: work_2,
      title: "Website for a constructions company",
      github: "https://github.com/Faaizahh/construction-company-website.git",
    },
    {
      id: 3,
      image: work_3,
      title: "A small mini-website",
      github: "https://github.com/Faaizahh/simple-mini-website.git",
    },
    {
      id: 4,
      image: work_4,
      title: "Website for a university",
      github: "https://github.com/Faaizahh/university-website.git",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={github} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
