import { Link } from 'react-router-dom';
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from './CarouselEducation.module.scss';
import styles from './CarouselEducation.scss';
import itIncubator from '../../../images/education/it-incubator.png';
import customs from '../../../images/education/customs.png';
import vstu from '../../../images/education/vstu.png';
import vgavm from '../../../images/education/vgavm.png';
import gloAcademy from '../../../images/education/glo_a.png'
import CarouselEducationItem from './carouselEducationItem/CarouselEducationItem';
import LinkColor from '../../linkColor/LinkColor';

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const renderLink = () => {
        return <LinkColor text={'Open Certificate'} href={'https://drive.google.com/file/d/1mO3aGi_rWn59IlyPrOLVdMQU3GkPVWhI/view?usp=sharing'}/>
    }

    return (
        <Slider {...settings} className={"sliderEducation"} dotsClass={"dots"}>
            <div className={s.slider}>
                {/* 1 */}

                <div className={s.sliderItems}
                    data-aos="fade-up"
                    data-aos-delay="50">

                    <CarouselEducationItem
                 
                    
                        img={gloAcademy}
                        years='2021 - 2022'
                        institution='Glo-Academy'
                        text='WordPress developer course'
                        link={renderLink()}
                    
                    />

                    <CarouselEducationItem
                        img={itIncubator}
                        years='2021'
                        institution='It-Incubator'
                        text='HTML, SCSS, BEM, REM, preprocessors, Pixel Perfect, Mobile First, Email letters, SVG, layout using REACT, basics Java Sсript, Bootstrap, the use of libraries in the layout of sites mobile first, layout of e-mail letters, WordPress, Git Hub, Figma, Photoshop, layout of educational projects, creating an application in a team with front-end developers '
                    />
                </div>
            </div>

            {/* 2 */}
            <div className={s.sliderItems}
                data-aos="fade-up"
                data-aos-delay="50">

                <CarouselEducationItem
                    img={customs}
                    years='2018 - 2019'
                    institution='State Institute of the Customs Authorities'
                    text='Retraining in the specialty of customs. Qualification - customs specialist'
                />

                <CarouselEducationItem
                    img={vstu}
                    years='2007 - 2008'
                    institution='Vitebsk State University of Technology'
                    text='Faculty of advanced training and retraining of personnel. Qualification - manager-economist'
                />

            </div>

            {/* 3 */}
            <div className={s.sliderItems}
                data-aos="fade-up"
                data-aos-delay="50">

                <CarouselEducationItem
                    img={vgavm}
                    years='1993 - 1998'
                    institution='Vitebsk State Academy of Veterinary Medicine'
                    text='Higher education in veterinary medicine. Qualification - veterinarian.'
                />
            </div>

            {/* <div>
                <h3>5</h3>
            </div> */}
            {/* <div>
                <h3>6</h3>
            </div> */}
        </Slider>
    );
}