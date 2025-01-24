import React from "react";
import "./testimonials.css";
import avatar_1 from "../../assets/avatar_1.jpeg";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={avatar_1} alt="" />
          </div>
          <h5 className="client_name">Fawaz Abdulsalam</h5>
          <small className="client_review">
            "Working with Faiza Abdulsalam has been an absolute pleasure! As a
            frontend developer, she consistently delivers high-quality,
            user-friendly interfaces with impeccable attention to detail. Her
            problem-solving skills, creativity, and ability to bring ideas to
            life make her an invaluable asset to any team. Faiza’s dedication
            and passion for her craft truly set her apart!"
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={avatar_1} alt="" />
          </div>
          <h5 className="client_name">Fawaz Abdulsalam</h5>
          <small className="client_review">
            "Working with Faiza Abdulsalam has been an absolute pleasure! As a
            frontend developer, she consistently delivers high-quality,
            user-friendly interfaces with impeccable attention to detail. Her
            problem-solving skills, creativity, and ability to bring ideas to
            life make her an invaluable asset to any team. Faiza’s dedication
            and passion for her craft truly set her apart!"
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={avatar_1} alt="" />
          </div>
          <h5 className="client_name">Fawaz Abdulsalam</h5>
          <small className="client_review">
            "Working with Faiza Abdulsalam has been an absolute pleasure! As a
            frontend developer, she consistently delivers high-quality,
            user-friendly interfaces with impeccable attention to detail. Her
            problem-solving skills, creativity, and ability to bring ideas to
            life make her an invaluable asset to any team. Faiza’s dedication
            and passion for her craft truly set her apart!"
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonials;
