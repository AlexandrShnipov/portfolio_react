import { Link } from 'react-router-dom';
import s from './Education.module.scss';
import education from '../../../images/background/education.jpg'
import CaruselEducation from '../../../common/carusels/caruselEducation/CaruselEducation';


const Education = () => {

    return (
        <section className={s.section}>
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
                            <Link className={s.sectionLink} to="/">Download resume</Link>
                        </div>
                        <CaruselEducation />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Education;