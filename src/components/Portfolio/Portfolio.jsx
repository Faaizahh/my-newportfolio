import React from "react";
import "./portfolio.css";
import work_1 from "../../assets/work_1.png";
import work_2 from "../../assets/work_2.png";
import work_3 from "../../assets/work_3.png";
import work_4 from "../../assets/work_4.png";
import work_5 from "../../assets/work_5.png";
import work_6 from "../../assets/work_6.png";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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
      title: "A simple calculator built with Javascript.",
      github: "https://github.com/Faaizahh/calculat.git",
    },

    {
      id: 4,
      image: work_4,
      title: "Website for a university",
      github: "https://github.com/Faaizahh/university-website.git",
    },

    {
      id: 5,
      image: work_5,
      title: "A restaurant website built with React and Bootstrap",
      github: "https://github.com/Faaizahh/faiza-restaurant",
    },
    {
      id: 6,
      image: work_6,
      title: "A small mini-website",
      github: "https://github.com/Faaizahh/simple-mini-website.git",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <Swiper
          className="container testimonials__container"
          modules={[Navigation, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            {/* <div className="container portfolio__container"> */}
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={data[0].image} alt={data[0].title} />
              </div>
              <h3>{data[0].title}</h3>
              <div className="portfolio__item-cta">
                <a href={data[0].github} className="btn">
                  Github
                </a>
                <a href={data[0].github} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
            {/* </div> */}
          </SwiperSlide>

          <SwiperSlide>
            {/* <div className="container portfolio__container"> */}
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={data[1].image} alt={data[1].title} />
              </div>
              <h3>{data[1].title}</h3>
              <div className="portfolio__item-cta">
                <a href={data[1].github} className="btn">
                  Github
                </a>
                <a href={data[1].github} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
            {/* </div> */}
          </SwiperSlide>

          <SwiperSlide>
            {/* <div className="container portfolio__container"> */}
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={data[2].image} alt={data[2].title} />
              </div>
              <h3>{data[2].title}</h3>
              <div className="portfolio__item-cta">
                <a href={data[2].github} className="btn">
                  Github
                </a>
                <a href={data[2].github} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
            {/* </div> */}
          </SwiperSlide>

          <SwiperSlide>
            {/* <div className="container portfolio__container"> */}
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={data[3].image} alt={data[3].title} />
              </div>
              <h3>{data[3].title}</h3>
              <div className="portfolio__item-cta">
                <a href={data[3].github} className="btn">
                  Github
                </a>
                <a href={data[3].github} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
            {/* </div> */}
          </SwiperSlide>

          <SwiperSlide>
            {/* <div className="container portfolio__container"> */}
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={data[4].image} alt={data[4].title} />
              </div>
              <h3>{data[4].title}</h3>
              <div className="portfolio__item-cta">
                <a href={data[4].github} className="btn">
                  Github
                </a>
                <a href={data[4].github} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
            {/* </div> */}
          </SwiperSlide>

          <SwiperSlide>
            {/* <div className="container portfolio__container"> */}
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={data[5].image} alt={data[5].title} />
              </div>
              <h3>{data[5].title}</h3>
              <div className="portfolio__item-cta">
                <a href={data[5].github} className="btn">
                  Github
                </a>
                <a href={data[5].github} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
            {/* </div> */}
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Portfolio;
