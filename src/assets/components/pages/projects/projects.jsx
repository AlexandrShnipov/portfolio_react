import React from 'react';
import s from './Projects.module.scss';
import CaruselProjects from '../../../common/carusels/caruselProjects/CaruselProjects';

const Projects = () => {

    return (
        <section className={s.section}>
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