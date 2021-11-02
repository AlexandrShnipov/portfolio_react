import { Link } from 'react-router-dom';
import React, { Component } from "react";
import Slider from "react-slick";
import cards from '../../../images/projects/cards.png';
import desire from '../../../images/projects/desire.png';
import thrivetalk from '../../../images/projects/thrivetalk.png';
import claenAndSimple from '../../../images/projects/claenAndSimple.png';
import smoothie from '../../../images/projects/smoothie.png';
import delivery from '../../../images/projects/delivery.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from './CaruselProjects.module.scss';
import styles from './CaruselProjects.scss';
import LinkColor from '../../linkColor/LinkColor';
import CaruselProgectsItem from '../caruselProjects/caruselProgectsItem/CaruselProgectsItem';

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
                    <CaruselProgectsItem
                        img={cards}
                        title='Learning cards'
                        stack='HTML, CSS, Figma, TypeScript, teamwork with front-end developers'
                    >
                        <LinkColor
                            href={'https://matumba125.github.io/learningApp'}
                            text='view project'
                        />
                        <LinkColor
                            style={{ marginLeft: '1rem' }}
                            href={'https://github.com/Matumba125/learningApp.git'}
                            text='open sourse code'
                        />
                    </CaruselProgectsItem>

                    {/* 1.2 */}
                    <CaruselProgectsItem
                        img={desire}
                        title='Desire'
                        stack='HTML, CSS, SCSS, JS, Gulp, Figma'
                    >
                        <LinkColor
                            href={'https://alexandrshnipov.github.io/desire-gulp'}
                            text='view project'
                        />
                        <LinkColor
                            style={{ marginLeft: '1rem' }}
                            href={'https://github.com/AlexandrShnipov/desire-gulp.git'}
                            text='open sourse code'
                        />
                    </CaruselProgectsItem>

                </div>
            </div>

            {/* 2 */}
            <div className={s.slider}>
                <div className={s.sliderItems}>

                    {/* 2.1 */}
                    <CaruselProgectsItem
                        img={thrivetalk}
                        title='Thrivetalk'
                        stack='HTML, CSS, SCSS, JS, Gulp, Figma'
                    >
                        <LinkColor
                            href={'https://alexandrshnipov.github.io/Travetalk_NEW'}
                            text='view project'
                        />
                        <LinkColor
                            style={{ marginLeft: '1rem' }}
                            href={'https://github.com/AlexandrShnipov/Travetalk_NEW.git'}
                            text='open sourse code'
                        />
                    </CaruselProgectsItem>

                    {/* 2.2 */}
                    <CaruselProgectsItem
                        img={claenAndSimple}
                        title='ClaenAndSimple'
                        stack='HTML, CSS, Bootstrap, Figma'
                    >
                        <LinkColor
                            href={'https://alexandrshnipov.github.io/clean_and_simple_website'}
                            text='view project'
                        />
                        <LinkColor
                            style={{ marginLeft: '1rem' }}
                            href={'https://github.com/AlexandrShnipov/clean_and_simple_website.git'}
                            text='open sourse code'
                        />
                    </CaruselProgectsItem>

                </div>
            </div>

            {/* 3 */}
            <div className={s.slider}>
                <div className={s.sliderItems}>

                    {/* 3.1 */}
                    <CaruselProgectsItem
                        img={smoothie}
                        title='Smoothie'
                        stack='HTML, CSS, LESS, JS, Fotoshop'
                    >
                        <LinkColor
                            href={'https://alexandrshnipov.github.io/smoothie'}
                            text='view project'
                        />

                        <LinkColor
                            style={{ marginLeft: '1rem' }}
                            href={'https://github.com/AlexandrShnipov/smoothie.git'}
                            text='open sourse code'
                        />
                    </CaruselProgectsItem>

                    {/* 3.2 */}
                    <CaruselProgectsItem
                        img={delivery}
                        title='Delivery'
                        stack='HTML, CSS, JS, Figma'
                    >
                        <LinkColor
                            href={'https://alexandrshnipov.github.io/Delivery-Food-New'}
                            text='view project'
                        />
                        <LinkColor
                            style={{ marginLeft: '1rem' }}
                            href={'https://github.com/AlexandrShnipov/Delivery-Food-New.git'}
                            text='open sourse code'
                        />
                    </CaruselProgectsItem>

                </div>
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