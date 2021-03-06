import { Link } from 'react-router-dom';
import s from './Education.module.scss';
import education from '../../../images/background/education.jpg'
import CaruselEducation from '../../../common/carusels/caruselEducation/CaruselEducation';
import LinkColor from '../../../common/linkColor/LinkColor'


const Education = () => {

    return (
        <section className={s.section} id="Education">
            <div className={s.sectionBgBox}
                data-aos="zoom-out"
                data-aos-duration="3000"
                data-aos-delay="100">
                <img className={s.sectionBgImg} src={education} alt="background" />
            </div>
            <div className={s.sectionContainer}>
                <div className={s.globalContainer}>
                    <div className={s.sectionContent}>
                        <div className={s.sectionHead}>
                            <h3 className={s.sectionTitle}>Education</h3>
                            <LinkColor
                                href={'https://drive.google.com/file/d/1erqQ2hSp98E0nPVAz0gC5DZhX69gR1r2/view?usp=sharing'}
                                text="Open resume" />
                        </div>
                        <CaruselEducation />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Education;