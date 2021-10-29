import { Link } from 'react-router-dom';
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from './CaruselEducation.module.scss';
import styles from './CaruselEducation.scss';
import itIncubator from '../../../images/education/it-incubator.png';
import customs from '../../../images/education/customs.png';
import vstu from '../../../images/education/vstu.png';
import vgavm from '../../../images/education/vgavm.png';

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings} className={"sliderEducation"} dotsClass={"dots"}>
            <div className={s.slider}>
                {/* 1 */}

                <div className={s.sliderItems}
                    data-aos="fade-up"
                    data-aos-delay="50">
                    <div className={s.sliderItem}>
                        <div className={s.sliderItemImgBox}>
                            <img className={`${s.sliderItemImg} ${s.sliderItemImgCircle}`} src={itIncubator} alt="itIncubator" />
                        </div>
                        <div className={s.sliderItemYearsBlock}>
                            <p className={s.years}>2021</p>
                            <p className={s.title}>It-Incubator</p>
                        </div>
                        <p className={s.sliderItemText}>Which firmament dominion first rule and tree. The seas he i were cattle Under living. It may beast every forth place.</p>
                    </div>

                    <div className={s.sliderItem}>
                        <div className={s.sliderItemImgBox}>
                            <img className={s.sliderItemImg} src={customs} alt="customs" />
                        </div>
                        <div className={s.sliderItemYearsBlock}>
                            <p className={s.years}>2018 - 2019</p>
                            <p className={s.title}>State Institute for Advanced Training and Retraining of the Customs Authorities of the Republic of Belarus</p>
                        </div>
                        <p className={s.sliderItemText}>Retraining in the specialty of customs. Qualification - customs specialist.</p>
                    </div>
                </div>
            </div>

            {/* 2 */}
            <div className={s.sliderItems}
                data-aos="fade-up"
                data-aos-delay="50">
                <div className={s.sliderItem}>
                    <div className={s.sliderItemImgBox}>
                        <img className={`${s.sliderItemImg} ${s.sliderItemImgCircle}`} src={vstu} alt="vstu" />
                    </div>
                    <div className={s.sliderItemYearsBlock}>
                        <p className={s.years}>2007 - 2008</p>
                        <p className={s.title}>Vitebsk State University of Technology</p>
                    </div>
                    <p className={s.sliderItemText}>Faculty of advanced training and retraining of personnel. Qualification - manager-economist.</p>
                </div>

                <div className={s.sliderItem}>
                    <div className={s.sliderItemImgBox}>
                        <img className={s.sliderItemImg} src={vgavm} alt="vgavm" />
                    </div>
                    <div className={s.sliderItemYearsBlock}>
                        <p className={s.years}>1993 - 1998</p>
                        <p className={s.title}>Vitebsk State Academy of Veterinary Medicine</p>
                    </div>
                    <p className={s.sliderItemText}>Higher education in veterinary medicine. Qualification - veterinarian.</p>
                </div>

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