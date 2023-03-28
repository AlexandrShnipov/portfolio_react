import s from './Education.module.scss';
import education from '../../../images/background/education.jpg'
import CaruselEducation from '../../../common/carusels/carouselEducation/CarouselEducation';
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
                                href={'https://alexandrshnipov.github.io/CV-react/'}
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