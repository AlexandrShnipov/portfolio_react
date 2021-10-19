import React from "react";

import s from './About.module.scss';

const About = () => {

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

                            <div className={s.bestBlockItems}>

                                <li className={s.bestBlockItem}>
                                    <div className={s.bestBlockItemContent}>
                                        <p className={s.bestBlockItemText}>HTML, CSS, GULP</p>
                                        <p className={s.bestBlockItemNum}>90%</p>
                                    </div>
                                    <div className={s.bestBlockItemContentBorder}></div>
                                    <div className={`${s.bestBlockItemLine} ${s.bestBlockItemLineAnimation}`} style={{ width: "90%" }}></div>
                                </li>

                                <li className={s.bestBlockItem}>
                                    <div className={s.bestBlockItemContent}>
                                        <p className={s.bestBlockItemText}>BAM</p>
                                        <p className={s.bestBlockItemNum}>90%</p>
                                    </div>
                                    <div className={s.bestBlockItemContentBorder}></div>
                                    <div className={`${s.bestBlockItemLine} ${s.bestBlockItemLineAnimation}`} style={{ width: "90%" }}></div>
                                </li>

                                <li className={s.bestBlockItem}>
                                    <div className={s.bestBlockItemContent}>
                                        <p className={s.bestBlockItemText}>SCSS</p>
                                        <p className={s.bestBlockItemNum}>85%</p>
                                    </div>
                                    <div className={s.bestBlockItemContentBorder}></div>
                                    <div className={`${s.bestBlockItemLine} ${s.bestBlockItemLineAnimation}`} style={{ width: "85%" }}></div>
                                </li>                                
                         
                                <li className={s.bestBlockItem}>
                                    <div className={s.bestBlockItemContent}>
                                        <p className={s.bestBlockItemText}>React, JS</p>
                                        <p className={s.bestBlockItemNum}>75%</p>
                                    </div>
                                    <div className={s.bestBlockItemContentBorder}></div>
                                    <div className={`${s.bestBlockItemLine} ${s.bestBlockItemLineAnimation}`} style={{ width: "75%" }}></div>
                                </li>

                                <li className={s.bestBlockItem}>
                                    <div className={s.bestBlockItemContent}>
                                        <p className={s.bestBlockItemText}>Wordpress</p>
                                        <p className={s.bestBlockItemNum} >90%</p>
                                    </div>
                                    <div className={s.bestBlockItemContentBorder}></div>
                                    <div className={`${s.bestBlockItemLine} ${s.bestBlockItemLineAnimation}`} style={{ width: "90%" }}></div>
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