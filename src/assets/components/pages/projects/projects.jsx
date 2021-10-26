import { Link } from 'react-router-dom';
import s from './Projects.module.scss';
// import thrivetalk from '../../../images/projects/thrivetalk.png';
// import desire from '../../../images/projects/desire.png';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Carusel from '../../../common/carusel/Carusel';

const Projects = () => {

    return (
        <section className={s.section}>
            <div className={s.sectionContainer}>
                <div className={s.globalContainer}>

                    <h3 className={s.sectionTitle}>Projects</h3>
                  <Carusel/>
                </div>
            </div>
        </section>

    )
}

export default Projects;