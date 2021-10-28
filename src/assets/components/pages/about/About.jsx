import React, { useRef, useEffect, useState } from "react";

import s from './About.module.scss';

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
        <section className={s.section}>
            <div className={s.sectionContainer}>
                <div className={s.globalContainer}>
                    <div className={s.sectionContent}>
                        <div className={s.experience}>
                            <h1 className={s.experienceYears}> 1.5  <span className={s.experienceYearsSquare}></span> </h1>
                            <h3 className={s.experienceText}>Years <br /> Experience <br /> Working</h3>
                        </div>
                        <div className={s.bestBlock}>
                            <h3 className={s.bestBlockTitle}>Great Experience</h3>
                            <p className={s.bestBlockText}>Fill appear won't may make moveth signs. Fourth. Good own. Green you're moveth us, lesser.</p>

                            <div ref={experienceRef} className={s.bestBlockItems}>

                                <li className={s.bestBlockItem}>
                                    <div className={s.bestBlockItemContent}>
                                        <p className={s.bestBlockItemText}>HTML, CSS, BEM, Grid, Bootstrap, Git</p>
                                        <p className={s.bestBlockItemNum}>{`${count90}%`}</p>
                                    </div>
                                    <div className={s.bestBlockItemContentBorder}></div>
                                    <div className={experienceStyle} style={{ width: "90%" }}></div>
                                </li>

                                <li className={s.bestBlockItem}>
                                    <div className={s.bestBlockItemContent}>
                                        <p className={s.bestBlockItemText}>GULP</p>
                                        <p className={s.bestBlockItemNum}>{`${count90}%`}</p>
                                    </div>
                                    <div className={s.bestBlockItemContentBorder}></div>
                                    <div className={experienceStyle} style={{ width: "90%" }}></div>
                                </li>

                                <li className={s.bestBlockItem}>
                                    <div className={s.bestBlockItemContent}>
                                        <p className={s.bestBlockItemText}>SCSS</p>
                                        <p className={s.bestBlockItemNum}>85%</p>
                                    </div>
                                    <div className={s.bestBlockItemContentBorder}></div>
                                    <div className={experienceStyle} style={{ width: "85%" }}></div>
                                </li>

                                <li className={s.bestBlockItem}>
                                    <div className={s.bestBlockItemContent}>
                                        <p className={s.bestBlockItemText}>JS, React, TSX</p>
                                        <p className={s.bestBlockItemNum}>60%</p>
                                    </div>
                                    <div className={s.bestBlockItemContentBorder}></div>
                                    <div className={experienceStyle} style={{ width: "60%" }}></div>
                                </li>

                                <li className={s.bestBlockItem}>
                                    <div className={s.bestBlockItemContent}>
                                        <p className={s.bestBlockItemText}>Wordpress</p>
                                        <p className={s.bestBlockItemNum} >90%</p>
                                    </div>
                                    <div className={s.bestBlockItemContentBorder}></div>
                                    <div className={experienceStyle} style={{ width: "90%" }}></div>
                                </li>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;