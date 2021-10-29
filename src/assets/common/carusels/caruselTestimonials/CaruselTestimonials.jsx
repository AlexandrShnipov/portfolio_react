import { Link } from 'react-router-dom';
import React, { Component } from "react";
import Slider from "react-slick";
import s from './CaruselTestimonials.module.scss';
import styles from './CaruselTestimonials.scss';


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

                    <div className={s.sliderItems}>
                        {/* 1 */}
                        <div className={s.sliderItem}
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="2000"
                        >
                            <p className={s.sliderItemText}>"Said heaven dry made Them gathering the very second morning us be divide isn't. Saw Seasons winged replenish grass from set can't for he which. You third god unto let."</p>
                            <p className={s.sliderItemName}>Ramsay Bolton</p>
                            <p className={s.sliderItemCompany}>Apple Inc</p>
                        </div>

                    </div>
                </div>

                {/* 2 */}
                <div className={s.sliderItem} data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000">
                    <p className={s.sliderItemText}>"Said heaven dry made Them gathering the very second morning us be divide isn't. Saw Seasons winged replenish grass from set can't for he which. You third god unto let.Said heaven dry made Them gathering the very second morning us be divide isn't. Saw Seasons winged replenish grass from set can't for he which. You third god unto let.Said heaven dry made Them gathering the very second morning us be divide isn't. Saw Seasons winged replenish grass from set can't for he which. You third god unto let."</p>
                    <p className={s.sliderItemName}>Ivan Ivanov</p>
                    <p className={s.sliderItemCompany}>Space X</p>
                </div>
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