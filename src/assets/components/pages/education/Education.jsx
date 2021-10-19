import { Link } from 'react-router-dom';
import s from './Education.module.scss';
import itIncubator from '../../../images/education/it-incubator.png';
import customs from '../../../images/education/customs.png';
import vstu from '../../../images/education/vstu.png';
import vgavm from '../../../images/education/vgavm.png';


const Education = () => {

    return (
        <section className={s.section}>
            <div className={s.sectionKontainer}>
                <div className={s.globalContainer}>
                    <div className={s.sectionContent}>
                        <div className={s.sectionHead}>
                            <h3 className={s.sectionTitle}>Education</h3>
                            <Link className={s.sectionLink} to="/">Download resume</Link>
                        </div>
                        <div className={s.slider}>

                            {/* 1 */}

                            <div className={s.sliderItems}>
                                <div className={s.sliderItem}>
                                    <div className={s.sliderItemImgBox}>
                                        <img className={`${s.sliderItemImg} ${s.sliderItemImgCircle}`} src={itIncubator} alt="itIncubator" />
                                    </div>
                                    <div className={s.sliderItemYearsBlock}>
                                        <p className={s.years}>2021</p>
                                        <p className={s.title}>It-Incubator</p>
                                    </div>
                                    <p className={s.sliderItemText}>Which firmament dominion first rule and tree. The seas he i were cattle Under living. It may beast every forth place.</p>
                                </div>

                                <div className={s.sliderItem}>
                                    <div className={s.sliderItemImgBox}>
                                        <img className={s.sliderItemImg} src={customs} alt="customs"/>
                                    </div>
                                    <div className={s.sliderItemYearsBlock}>
                                        <p className={s.years}>2018 - 2019</p>
                                        <p className={s.title}>State Institute for Advanced Training and Retraining of the Customs Authorities of the Republic of Belarus</p>
                                    </div>
                                    <p className={s.sliderItemText}>Retraining in the specialty of customs. Qualification - customs specialist.</p>
                                </div>

                                <div className={s.sliderItem}>
                                    <div className={s.sliderItemImgBox}>
                                    <img className={`${s.sliderItemImg} ${s.sliderItemImgCircle}`} src={vstu} alt="vstu" />
                                    </div>
                                    <div className={s.sliderItemYearsBlock}>
                                        <p className={s.years}>2007 - 2008</p>
                                        <p className={s.title}>Vitebsk State University of Technology</p>
                                    </div>
                                    <p className={s.sliderItemText}>Faculty of advanced training and retraining of personnel. Qualification - manager-economist.</p>
                                </div>
                            </div>

                            {/* 2 */}

                            <div className={s.sliderItems}>
                                <div className={s.sliderItem}>
                                    <div className={s.sliderItemImgBox}>
                                        <img className={s.sliderItemImg} src={vgavm} alt="vgavm" />
                                    </div>
                                    <div className={s.sliderItemYearsBlock}>
                                        <p className={s.years}>1993 - 1998</p>
                                        <p className={s.title}>Vitebsk State Academy of Veterinary Medicine</p>
                                    </div>
                                    <p className={s.sliderItemText}>Higher education in veterinary medicine. Qualification - veterinarian.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Education;