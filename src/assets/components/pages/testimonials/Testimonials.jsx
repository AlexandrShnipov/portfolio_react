import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import styled, { keyframes } from 'styled-components';
// import { fadeInDown } from 'react-animations';
// import Fade from 'react-reveal/Fade';
import s from './Testimonials.module.scss';
import testimonials from '../../../images/background/testimonials.jpg';
import CaruselTestimonials from '../../../common/carusels/caruselTestimonials/CaruselTestimonials';

// const FadeInDoun = styled.div`animation: 2s ${keyframes`${fadeInDown}`}`;


const Testimonials = () => {


    // const animItems = document.querySelectorAll(".active");
    // console.log('animItems', animItems);

    // if (animItems.lenght > 0) {
    //     window.addEventListener("scroll", animOnScroll);

    //     const animOnScroll = () => {
    //         for (let index = 0; index < animItems.length; index++) {
    //             const animItem = animItems[index];
    //             const animItemHeight = animItem.offsetHeight;
    //             const animItemOffset = offset(animItem).top;
    //             const animStart = 4;

    //             let animItemPoint = window.innerHeight - animItemHeight / animStart;
    //             if (animItemHeight > window.innerHeight) {
    //                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
    //             }

    //             if ((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)) {
    //                 animItem.classList.add(".active");
    //             }
    //             else {
    //                 animItem.classList.remove(".active");
    //             }
    //         }
    //     }

    //     const offset = (el) => {
    //         const rect = el.getBoundingClientRect(),
    //             scrollLeft = window.scrollX || document.documentElement.scrollLeft,
    //             scrollTop = window.scrollY || document.documentElement.scrollTop;
    //         return {
    //             top: rect.top + scrollTop, left: rect.left + scrollLeft
    //         }
    //     }

    //     setTimeout(() => {
    //         animOnScroll();
    //     }, 300);
    // }


    return (
        <section className={s.section}>
            <div className={s.sectionBgBox}>
                <img className={s.sectionBgImg} src={testimonials} alt="images background"
                    data-aos="zoom-out"
                    data-aos-duration="3000"
                    data-aos-delay="100" />
            </div>
            <div className={s.sectionContainer}>
                <div className={s.globalContainer}>

                    <div className={s.sectionContent} >
                        <div className={s.sectionTitleBox} data-aos="fade-up" data-aos-delay="100">
                            <svg className={s.sectionTitleBoxSvgImg} fill="none" viewBox="0 0 75 75" data-aos="example-anim3" ><defs></defs><path fill="currentColor" d="M25 0C16.9271 0 10.7422 2.14844 6.44531 6.44531 2.14844 10.7422 0 16.9271 0 25v50h31.25V25H12.5c0-4.4271.9766-7.6172 2.9297-9.5703C17.3828 13.4766 20.5729 12.5 25 12.5V0zm43.75 0c-8.0729 0-14.2578 2.14844-18.5547 6.44531C45.8984 10.7422 43.75 16.9271 43.75 25v50H75V25H56.25c0-4.4271.9766-7.6172 2.9297-9.5703C61.1328 13.4766 64.3229 12.5 68.75 12.5V0z"></path></svg>

                            <h3 className={s.sectionTitleBoxTitle} >
                                Creative & dedicated is things that gilber studio brings for your business.
                            </h3>
                        </div>
                        <div className={s.sliderWrap}>
                            <Link className={s.linkAdded} to="/">add testimonial</Link>
                            <CaruselTestimonials />
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </section>

    )
}

export default Testimonials;