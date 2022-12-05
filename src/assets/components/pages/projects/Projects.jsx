import React from 'react';
import s from './Projects.module.scss';
import projects from '../../../images/background/projects.jpg';
import CarouselProjects from '../../../common/carusels/carouselProjects/CarouselProjects';

const Projects = () => {

    return (
        <section className={s.section} id="Projects">
            <div className={s.sectionBgBox}
                data-aos="zoom-out"
                data-aos-duration="3000"
                data-aos-delay="100">
                <img className={s.sectionBgImg} src={projects} alt="background" />
            </div>
            <div className={s.sectionContainer}>
                <div className={s.globalContainer}>

                    <h3 className={s.sectionTitle}>Projects</h3>
                    <CarouselProjects />
                </div>
            </div>
        </section>

    )
}

export default Projects;