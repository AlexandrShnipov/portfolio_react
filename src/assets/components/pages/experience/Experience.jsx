import React from "react";
import s from './Experience.module.scss';
import experience from '../../../images/background/experience.jpg'
import ExperienceItem from '../../../common/experienceItem/ExperienceItem';


const Department = () => {

    return (
        <section className={s.section} id="Experience">
            <div className={s.sectionBgBox}
                data-aos="zoom-out"
                data-aos-duration="3000"
                data-aos-delay="100">
                <img className={s.sectionBgImg} src={experience} alt="background" />
            </div>
            <div className={s.sectionContainer}>
                <div className={s.globalContainer}>
                    <div className={s.sectionContent}>

                        <h3 className={s.sectionTitle}>Experience</h3>


                        <div className={s.sectionItems} data-aos="fade-up" data-aos-delay="50">

                            <ExperienceItem
                                function='Site layout'
                                institution='Freelanse'
                                years='Currently'
                            />

                            <ExperienceItem
                                function='Head of the Department of Customs'
                                institution='State Institute of the Customs Authorities'
                                years='2019 - 2021'
                            />

                            <ExperienceItem
                                function='Head of Risk Analysis and Management Department'
                                institution='Vitebsk customs'
                                years='2016 - 2019'
                            />

                            <ExperienceItem
                                function=' From inspector to deputy head of the customs clearance and control department'
                                institution='Vitebsk customs'
                                years=' 2004 - 2016'
                            />

                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Department;

