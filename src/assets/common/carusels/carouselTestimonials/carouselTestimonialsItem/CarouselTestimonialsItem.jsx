import React, { Component } from "react";
import s from './CarouselTestimonialsItem.module.scss';


const CarouselTestimonialsItem = (props) => {

    return (
       
        <div className={s.sliderItem}
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="2000"
    >
        <p className={s.sliderItemTestimonial}>"{props.testimonial}"</p>
        <p className={s.sliderItemName}>{props.name}</p>
        <p className={s.sliderItemCompany}>{props.company}</p>
    </div>

    )
}

 export default CarouselTestimonialsItem;