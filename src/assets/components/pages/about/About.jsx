import React, { useRef, useEffect, useState } from "react";
import about from '../../../images/background/about.jpg';
import s from './About.module.scss';
import AboutCount from '../../../common/aboutCount/AboutCount'

const About = () => {
    const [animation, setAnimation] = useState(false);
    const experienceRef = useRef();

    const windowHeignt = window.innerHeight;

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    const handleScroll = () => {
        if (experienceRef && experienceRef.current) {
            const rect = experienceRef.current.getBoundingClientRect();
            const topEdge = rect.top > -rect.height && rect.top < windowHeignt;
            setAnimation(topEdge);
        }
    }

    return (
        <div className={s.section} id="About">
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
                            <h1 className={s.experienceYears}> .5  <span className={s.experienceYearsSquare}></span> </h1>
                            <h3 className={s.experienceText}>Years <br /> Experience <br /> Working</h3>
                        </div>
                        <div className={s.bestBlock}>
                            <h3 className={s.bestBlockTitle}>Great Skills</h3>
                            <p className={s.bestBlockText}>The future is bright, the future is digitalization. Let's help each other bring the light closer. Your partner in the world of technology.</p>

                            <div ref={experienceRef} className={s.bestBlockItems}
                                data-aos="fade-up"
                                data-aos-delay="50">


                                <AboutCount
                                    skills='html / css / scss / bem / rem'
                                    isAnimation={animation}
                                    limit={70}
                                />

                                <AboutCount
                                    skills='mobile first / email letters / pixel perfect'
                                    isAnimation={animation}
                                    limit={70}
                                />

                                <AboutCount
                                    skills='gulp'
                                    isAnimation={animation}
                                    limit={60}
                                />

                                <AboutCount
                                    skills='JavaScript / React'
                                    isAnimation={animation}
                                    limit={40}
                                />

                                <AboutCount
                                    skills='bootstrap'
                                    isAnimation={animation}
                                    limit={60}
                                />

                                <AboutCount
                                    skills='git'
                                    isAnimation={animation}
                                    limit={60}
                                />

                                <AboutCount
                                    skills='wordpress'
                                    isAnimation={animation}
                                    limit={60}
                                />

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;