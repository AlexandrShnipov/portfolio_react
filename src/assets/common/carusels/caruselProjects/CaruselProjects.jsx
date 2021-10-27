import { Link } from 'react-router-dom';
import React, { Component } from "react";
import Slider from "react-slick";
import thrivetalk from '../../../images/projects/thrivetalk.png';
import desire from '../../../images/projects/desire.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from './CaruselProjects.module.scss';
import styles from './CaruselProjects.scss';

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings} className={"sliderWrap"} dotsClass={"dots"}>
            <div className={s.slider}>
                {/* 1 */}
                <div className={s.sliderItems}>
                    {/* 1.1 */}
                    <div className={s.sliderItem}>
                        <div className={s.imgBox}>
                            <div className={s.imgBoxSquare}>
                                <img className={s.imgBoxImg} src={desire} alt="Desire" />
                                <div className={s.imgBoxLinks}>
                                    <Link className={`${s.imgBoxLink} ${s.imgBoxLinkView}`} to="/">
                                        view project
                                    </Link>
                                    <Link className={`${s.imgBoxLink} ${s.imgBoxLinkCode}`} to="/">
                                        open sourse code
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={s.sliderItemContent}>
                            <h3 className={s.sliderItemContentTitle}>
                                Desire
                            </h3>
                            <div className={s.sliderItemContentText}>
                                <p className={s.sliderItemContentStack}>
                                    Stack:
                                </p>
                                <span>HTML, CSS, SCSS, JS, Gulp.</span>
                            </div>
                        </div>
                    </div>

                    {/* 1.2 */}
                    <div className={s.sliderItem}>
                        <div className={s.imgBox}>
                            <div className={s.imgBoxSquare}>
                                <img className={s.imgBoxImg} src={thrivetalk} alt="thrivetalk" />
                                <div className={s.imgBoxLinks}>
                                    <Link className={`${s.imgBoxLink} ${s.imgBoxLinkView}`} to="/">
                                        view project
                                    </Link>
                                    <Link className={`${s.imgBoxLink} ${s.imgBoxLinkCode}`} to="/">
                                        open sourse code
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={s.sliderItemContent}>
                            <h3 className={s.sliderItemContentTitle}>
                                Thrivetalk
                            </h3>
                            <div className={s.sliderItemContentText}>
                                <p className={s.sliderItemContentStack}>
                                    Stack:
                                </p>
                                <span>HTML, CSS, SCSS, Grid, JS, Gulp.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3>2</h3>
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