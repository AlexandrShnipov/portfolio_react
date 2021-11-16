import { Link } from 'react-router-dom';
import React, { Component } from "react";
import Slider from "react-slick";
import s from './CaruselTestimonials.module.scss';
import styles from './CaruselTestimonials.scss';
import CaruselTestimonialsItem from './caruselTestimonialsItem/CaruselTestimonialsItem'


export default class Fade extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <Slider {...settings} className={"sliderTestimonials"} dotsClass={"dots"}>
                <div className={s.slider}>

                    {/* 1 */}

                    <CaruselTestimonialsItem
                        testimonial='Here may be your review.'
                        name='Name'
                        company='company'
                    />
                </div>

                {/* 2 */}

                <CaruselTestimonialsItem
                    testimonial='Here may be your review.Here may be your review.Here may be your review.Here may be your review.Here may be your review.Here may be your review.Here may be your review.Here may be your review.Here may be your review.Here may be your review.Here may be your review.Here may be your review.Here may be your review.Here may be your review.Here may be your review.Here may be your review.Here may be your review.Here may be your review.Here may be your review.Here may be your review.Here may be your review.Here may be your review.'
                    name='Name'
                    company='company'
                />

                {/* <div>
                <h3>3</h3>
            </div> */}
                {/* <div>
                <h3>4</h3>
            </div> */}
                {/* <div>
                <h3>5</h3>
            </div> */}
                {/* <div>
                <h3>6</h3>
            </div> */}
            </Slider>
        );
    }
}