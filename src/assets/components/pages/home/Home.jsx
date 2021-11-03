// import 'react-fancybox/lib/fancybox.css'
import { Link } from 'react-router-dom';
import s from './Home.module.scss';
import home from '../../../images/background/home.jpg'

import FancyVideo from 'react-videojs-fancybox';

const Home = () => {

    return (
        <section className={s.section} id="Home">
            <div className={s.sectionBgBox}>
                <img className={s.sectionBgImg} src={home} alt="images background" />
            </div>
            <div className={s.sectionContainer}>
                <div className={s.globalContainer}>
                    <div className={s.popup}>
                        {/* <div className={s.popupButton}>

                            <Link className={s.popupLink} data-fancybox href="https://youtu.be/9lO06Zxhu88"></Link>
                        </div> */}

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
                        <span className={s.nameProfession}>
                        Web developer (HTML, CSS)
                        </span>
                        <h1 className={s.name}>
                            Alexander  <span className={s.nameSquare}></span>
                        </h1>
                        <p className={s.sectionContentText}>
                            Working with client and community, we deliver masterplans that create vibrant new places and spaces, attract people, and encourage.
                        </p>
                    </div>
                </div>
            </div >

        </section >
    )
}

export default Home;