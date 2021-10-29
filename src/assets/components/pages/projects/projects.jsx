import React from 'react';
import s from './Projects.module.scss';
import projects from '../../../images/background/projects.jpg';
import CaruselProjects from '../../../common/carusels/caruselProjects/CaruselProjects';

const Projects = () => {

    return (
        <section className={s.section}>
            <div className={s.sectionBgBox}
                data-aos="zoom-out"
                data-aos-duration="3000"
                data-aos-delay="100">
                <img className={s.sectionBgImg} src={projects} alt="background" />
            </div>
            <div className={s.sectionContainer}>
                <div className={s.globalContainer}>

                    <h3 className={s.sectionTitle}>Projects</h3>
                    <CaruselProjects />
                </div>
            </div>
        </section>

    )
}

export default Projects;