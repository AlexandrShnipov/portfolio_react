import React from "react";
import s from './Experiense.module.scss';
import experiense from '../../../images/background/experiense.jpg'
import ExperienseItem from '../../../common/experienseItem/ExperienseItem';


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

                        <h3 className={s.sectionTitle}>Experiense</h3>


                        <div className={s.sectionItems} data-aos="fade-up" data-aos-delay="50">

                            <ExperienseItem
                                function='site layout'
                                institution='Frilanse'
                                years='2021'
                            />

                            <ExperienseItem
                                function='Head of the Department of Customs'
                                institution='State Institute of the Customs Authorities'
                                years='2019 - 2021'
                            />

                            <ExperienseItem
                                function='Head of Risk Analysis and Management Department'
                                institution='Vitebsk customs'
                                years='2016 - 2019'
                            />

                            <ExperienseItem
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

