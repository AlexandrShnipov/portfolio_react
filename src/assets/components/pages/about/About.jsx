import React, { useRef, useEffect, useState } from "react";
import about from '../../../images/background/about.jpg';
import s from './About.module.scss';
import AboutCount90 from '../../../common/aboutCount/90/AboutCount90';
import AboutCount80 from '../../../common/aboutCount/80/AboutCount80';
import AboutCount75 from '../../../common/aboutCount/75/AboutCount75';

const About = () => {
    const [animation, setAnimation] = useState(false);
    const [count90, setCount] = useState(0);
    const experienceRef = useRef();
    console.log(count90)
    const handleCount = () => {
        setCount(state => state + 1)
    }

    const windowHeignt = window.innerHeight;
    let countUp = setInterval(() => {
        //    handleCount()
    }, 3)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    useEffect(() => {
        if (animation) {
            if (count90 < 90) {
                countUp = setInterval(() => {
                    setCount(state => state + 1)
                }, 20)
            }
        }
        return () => {
            clearInterval(countUp)
        }
    }, [count90, animation])

    const handleScroll = () => {
        console.log(experienceRef.current.getBoundingClientRect())
        console.log(windowHeignt);
        const rect = experienceRef.current.getBoundingClientRect();
        const topEdge = rect.top > -rect.height && rect.top < windowHeignt;
        if (topEdge) {
            setAnimation(() => true)
        } else {
            setAnimation(() => false)
            setCount(0)
        }
    }
    const experienceStyle = animation ? `${s.bestBlockItemLine} ${s.bestBlockItemLineAnimation}` : s.bestBlockItemLine;



    return (
        <section className={s.section} id="About">
            <div className={s.sectionBgBox}
                data-aos="zoom-out"
                data-aos-duration="3000"
                data-aos-delay="100">
                <img className={s.sectionBgImg} src={about} alt="background" />
            </div>
            <div className={s.sectionContainer}>
                <div className={s.globalContainer}>
                    <div className={s.sectionContent}>
                        <div className={s.experience}>
                            <h1 className={s.experienceYears}> 1.5  <span className={s.experienceYearsSquare}></span> </h1>
                            <h3 className={s.experienceText}>Years <br /> Experience <br /> Working</h3>
                        </div>
                        <div className={s.bestBlock}>
                            <h3 className={s.bestBlockTitle}>Great Skills</h3>
                            <p className={s.bestBlockText}>The future is bright, the future is digitalization. Let's help each other bring the light closer. Your partner in the world of technology.</p>

                            <div ref={experienceRef} className={s.bestBlockItems}
                                data-aos="fade-up"
                                data-aos-delay="50">

                                <AboutCount90
                                    skils='html / css / scss / bem / rem'
                                />

                                <AboutCount90
                                    skils='mobile ferst / pixel perfect '
                                />

                                <AboutCount90
                                    skils='gulp'
                                />

                                <AboutCount80
                                    skils='basics of js, and react'
                                />

                                <AboutCount75
                                    skils='bootstrap'
                                />

                                <AboutCount90
                                    skils='git '
                                />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;