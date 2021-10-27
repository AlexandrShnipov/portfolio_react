import { Link } from 'react-router-dom';
import React, { Component } from "react";
import Slider from "react-slick";
import s from './CaruselTestimonials.module.scss';
import styles from './CaruselTestimonials.scss';


export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings} className={"sliderTestimonials"} dotsClass={"dots"}>
            <div className={s.slider}>
                {/* 1 */}
                <div className={s.sliderItems}>
                    {/* 1.1 */}
                    <div className={s.sliderItem} data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000"
                    >
                        <p className={s.sliderItemText}>"Said heaven dry made Them gathering the very second morning us be divide isn't. Saw Seasons winged replenish grass from set can't for he which. You third god unto let."</p>
                        <p className={s.sliderItemName}>Ramsay Bolton</p>
                        <p className={s.sliderItemCompany}>Apple Inc</p>
                    </div>

                    {/* 1.2 */}
                 
                </div>
            </div>
            <div className={s.sliderItem} data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000"
                    >
                        <p className={s.sliderItemText}>"Said heaven dry made Them gathering the very second morning us be divide isn't. Saw Seasons winged replenish grass from set can't for he which. You third god unto let."</p>
                        <p className={s.sliderItemName}>Ramsay Bolton</p>
                        <p className={s.sliderItemCompany}>Apple Inc</p>
                    </div>
            <div>
                <h3>3</h3>
            </div>
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