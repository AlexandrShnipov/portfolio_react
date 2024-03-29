// import 'react-fancybox/lib/fancybox.css'
import { Link } from 'react-router-dom';
import s from './Home.module.scss';
import home from '../../../images/background/home.jpg';
import homeMedium from '../../../images/background/homeMedium.jpg';
import homeMobile from '../../../images/background/homeMobile.jpg';
import FancyVideo from 'react-videojs-fancybox';

const Home = () => {

    return (
        <section className={s.section} id="Home">
            <div className={s.sectionBgBox}>
                <picture className={s.sectionBgImg}>
                    <source media='(min-width: 1280px)' srcset={home} />
                    <source media='(min-width: 768px)' srcset={homeMedium} />
                    <source media='(min-width: 250px)' srcset={homeMobile} />
                    <img src={home} alt="images background" />
                </picture>
            </div>
            <div className={s.sectionContainer}>
                <div className={s.globalContainer}>
                    <div className={s.popup}>

                        {/* ! fancy */}

                        <div className={s.FancyVideo}>
                            <FancyVideo
                                source='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
                                id={"sintel"}
                            />
                        </div>
                    </div>
                    <div className={s.sectionContent}
                        data-aos="fade-up"
                        data-aos-delay="100">
                        <h1 className={s.name}>
                            <span className={s.nameProfession}>
                                Frontend developer
                            </span>
                            Aliaksander <span className={s.nameSquare}></span>
                        </h1>
                        <p className={s.sectionContentText}>
                            Welcome to my portfolio site.<br />
                          I am a result-oriented, enthusiastic, and stress-resistant frontend developer with experience in creating landing pages and SPAs using Java Script, React, TypeScript, Svelte, HTML, CSS, SCSS/LESS, Grid, Bootstrap, Gulp, and WordPress. In addition to my technical skills, I am a positive and sociable person who can easily find a common language with people. I have a strong desire to continuously improve myself as a developer and learn new technologies.
                        </p>
                    </div>
                </div>
            </div >

        </section >
    )
}

export default Home;