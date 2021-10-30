import React from "react";
import s from './Experiense.module.scss';
import experiense from '../../../images/background/experiense.jpg'


const Department = () => {

    return (
        <section className={s.section} id="Experiense">
            <div className={s.sectionBgBox}
                data-aos="zoom-out"
                data-aos-duration="3000"
                data-aos-delay="100">
                <img className={s.sectionBgImg} src={experiense} alt="background" />
            </div>
            <div className={s.sectionContainer}>
                <div className={s.globalContainer}>
                    <div className={s.sectionContent}>
                        <div className={s.sectionTitle}>
                            <h3 className={s.sectionTitle}>Experiense</h3>
                        </div>
                        <div className={s.sectionItems} data-aos="fade-up" data-aos-delay="50">

                            <div className={s.sectionItem}>
                                <p className={s.function}>
                                    Head of the Department of Customs
                                </p>
                                <p className={s.placeOfWork}>
                                    State Institute for Advanced Training and Retraining of the Customs Authorities of the Republic of Belarus
                                </p>
                                <p className={s.years}>
                                    2019 - 2021
                                </p>
                            </div>

                            <div className={s.sectionItem}>
                                <p className={s.function}>
                                    Head of Risk Analysis and Management Department
                                </p>
                                <p className={s.placeOfWork}>
                                    Vitebsk customs
                                </p>
                                <p className={s.years}>
                                    2016 - 2019
                                </p>
                            </div>

                            <div className={s.sectionItem}>
                                <p className={s.function}>
                                    From inspector to deputy head of the customs clearance and control department
                                </p>
                                <p className={s.placeOfWork}>
                                    Vitebsk customs
                                </p>
                                <p className={s.years}>
                                    2004 - 2016
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Department;

