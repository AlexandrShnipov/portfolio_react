import { Link } from 'react-router-dom';
import './Projects.module.scss';

const Projects = () => {

    return (
        <section className={s.section}>
            <div className={s.sectionContainer}>
                <div className={s.sectionContent}>
                    <h3 className={s.sectionTitle}>Projects</h3>
                    <div className={s.slider}>

                        {/* 1 */}
                        <div className={s.sliderItems}>
                            {/* 1.1 */}
                            <div className={s.sliderItem}>
                                <div className={s.imgBox}>
                                    <img src="" alt="" />
                                    <div className={s.imgBoxLinks}>
                                        <Link className={s.imgBoxLinkView} to="/">
                                            view project
                                        </Link>
                                        <Link className={s.imgBoxLinkCode} to="/">
                                            open sourse code
                                        </Link>
                                    </div>
                                </div>
                                <div className={s.sliderItemContent}>
                                    <h3 className={s.sliderItemContentTitle}>
                                        Title
                                    </h3>
                                    <p className={s.sliderItemContentStack}>
                                        Stack: HTML, CSS, SCSS, Gulp.
                                    </p>
                                </div>
                            </div>
                            {/* 1.2 */}
                            <div className={s.sliderItem}>
                                <div className={s.imgBox}>
                                    <img src="" alt="" />
                                    <div className={s.imgBoxLinks}>
                                        <Link className={s.imgBoxLinkView} to="/">
                                            view project
                                        </Link>
                                        <Link className={s.imgBoxLinkCode} to="/">
                                            open sourse code
                                        </Link>
                                    </div>
                                </div>
                                <div className={s.sliderItemContent}>
                                    <h3 className={s.sliderItemContentTitle}>
                                        Title
                                    </h3>
                                    <p className={s.sliderItemContentStack}>
                                        Stack: HTML, CSS, SCSS, Gulp.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Projects;