import { Link } from 'react-router-dom';
import s from './Education.module.scss';
import bg from '../../../images/background/education.png';
import CaruselEducation from '../../../common/carusels/caruselEducation/CaruselEducation';


const Education = () => {

    return (
        <section className={s.section}>
            {/* <div className={s. backgroundBox}>
                <img className={s.backgroundImg} src={bg} alt="background" />
            </div> */}
            <div className={s.sectionContainer}>
                <div className={s.globalContainer}>
                    <div className={s.sectionContent}>
                        <div className={s.sectionHead}>
                            <h3 className={s.sectionTitle}>Education</h3>
                            <Link className={s.sectionLink} to="/">Download resume</Link>
                        </div>
                      <CaruselEducation/>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Education;