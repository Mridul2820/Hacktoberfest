import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.webp";
import AVTR2 from "../../assets/avatar2.webp";
import AVTR3 from "../../assets/avatar3.webp";
import AVTR4 from "../../assets/avatar4.webp";

import { Pagination, Mousewheel, Navigation, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// data for dynamic generation of components

const data = [
  {
    avatar: AVTR1,
    name: "Lorem",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla porro et officiis dignissimos natus excepturi fugiat quos, sunt ut nostrum iste exercitationem a vitae, cumque tempora aspernatur dolorum! Doloribus, sint.",
  },
  {
    avatar: AVTR2,
    name: "Lorem",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla porro et officiis dignissimos natus excepturi fugiat quos, sunt ut nostrum iste exercitationem a vitae, cumque tempora aspernatur dolorum! Doloribus, sint.",
  },
  {
    avatar: AVTR3,
    name: "Lorem",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla porro et officiis dignissimos natus excepturi fugiat quos, sunt ut nostrum iste exercitationem a vitae, cumque tempora aspernatur dolorum! Doloribus, sint.",
  },
  {
    avatar: AVTR4,
    name: "Lorem",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla porro et officiis dignissimos natus excepturi fugiat quos, sunt ut nostrum iste exercitationem a vitae, cumque tempora aspernatur dolorum! Doloribus, sint.",
  },
];

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials🍒</h2>

      <Swiper
        className="container container__testimonials"
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        navigation={true}
        loop={true}
        keyboard={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination, Navigation, Keyboard]}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="meh" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <Swiper
        className="container container__testimonials"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="meh" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper> */}
    </section>
  );
};

export default testimonials;
