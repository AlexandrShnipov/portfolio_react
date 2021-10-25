import { Link } from 'react-router-dom';
import s from './Projects.module.scss';
import thrivetalk from '../../../images/projects/thrivetalk.png';
import desire from '../../../images/projects/desire.png';

const Projects = () => {

    return (
        <section className={s.section}>
            <div className={s.sectionContainer}>
                <div className={s.globalContainer}>

                    <h3 className={s.sectionTitle}>Projects</h3>
                    <div className={s.slider}>

                        {/* 1 */}
                        <div className={s.sliderItems}>
                            {/* 1.1 */}
                            <div className={s.sliderItem}>
                                <div className={s.imgBox}>
                                    <div className={s.imgBoxSquare}>
                                        <img className={s.imgBoxImg} src={desire} alt="Desire" />
                                        <div className={s.imgBoxLinks}>
                                            <Link className={`${s.imgBoxLink} ${s.imgBoxLinkView}`} to="/">
                                                view project
                                            </Link>
                                            <Link className={`${s.imgBoxLink} ${s.imgBoxLinkCode}`} to="/">
                                                open sourse code
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className={s.sliderItemContent}>
                                    <h3 className={s.sliderItemContentTitle}>
                                        Desire
                                    </h3>
                                    <div className={s.sliderItemContentText}>
                                        <p className={s.sliderItemContentStack}>
                                            Stack:
                                        </p>
                                        <span>HTML, CSS, SCSS, JS, Gulp.</span>
                                    </div>
                                </div>
                            </div>

                            {/* 1.2 */}
                            <div className={s.sliderItem}>
                                <div className={s.imgBox}>
                                    <div className={s.imgBoxSquare}>
                                        <img className={s.imgBoxImg} src={thrivetalk} alt="thrivetalk" />
                                        <div className={s.imgBoxLinks}>
                                            <Link className={`${s.imgBoxLink} ${s.imgBoxLinkView}`} to="/">
                                                view project
                                            </Link>
                                            <Link className={`${s.imgBoxLink} ${s.imgBoxLinkCode}`} to="/">
                                                open sourse code
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className={s.sliderItemContent}>
                                    <h3 className={s.sliderItemContentTitle}>
                                        Thrivetalk
                                    </h3>
                                    <div className={s.sliderItemContentText}>
                                        <p className={s.sliderItemContentStack}>
                                            Stack:
                                        </p>
                                        <span>HTML, CSS, SCSS, Grid, JS, Gulp.
                                        </span>
                                    </div> 
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