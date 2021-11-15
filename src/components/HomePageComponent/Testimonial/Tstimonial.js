import React from "react";
import style from "./Testimonial.module.css";
import { Carousel } from "react-bootstrap";
import TestimonialContent from "./TestimonialContent";
import { testimonialData } from "../../Data/TestimonialData";

const Tstimonial = () => {
  return (
    <div className={style.section}>
      <Carousel className={style.my_carusel} controls={false}>
        {testimonialData.length > 0 &&
          testimonialData.map((data, index) => (
            <Carousel.Item key={index}>
              <TestimonialContent data={data} />
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};

export default Tstimonial;
