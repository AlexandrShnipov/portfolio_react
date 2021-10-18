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
                            <h3 className={s.experienceText}>Years <br/> Experience <br/> Working</h3>
                        </div>
                        <div className={s.bestBlock}>
                            <h3 className={s.bestBlockTitle}>Great Experience</h3>
                            <p className={s.bestBlockText}>Fill appear won't may make moveth signs. Fourth. Good own. Green you're moveth us, lesser.</p>
                       
                            <div className={s.bestBlockItems}>
                       
                                <li className={s.bestBlockItem}>
                                  <div className={s.bestBlockItemContent}>
                                        <p className={s.bestBlockItemText}>Web design</p>
                                        <p className={s.bestBlockItemNum}>70%</p>
                                  </div>
                                    <div className={s.bestBlockItemLine} style={{width: "70%"}}></div>
                                </li>

                                <li className={s.bestBlockItem}>
                                  <div className={s.bestBlockItemContent}>
                                        <p className={s.bestBlockItemText}>Figma</p>
                                        <p className={s.bestBlockItemNum}>85%</p>
                                  </div>
                                    <div className={s.bestBlockItemLine} style={{width: "85%"}}></div>
                                </li>

                                <li className={s.bestBlockItem}>
                                  <div className={s.bestBlockItemContent}>
                                        <p className={s.bestBlockItemText}>Wordpress</p>
                                        <p className={s.bestBlockItemNum} >90%</p>
                                  </div>
                                    <div className={s.bestBlockItemLine} style={{width: "90%"}}></div>
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