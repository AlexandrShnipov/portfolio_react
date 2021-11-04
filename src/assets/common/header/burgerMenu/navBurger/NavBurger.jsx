import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTelegramPlane, faLinkedinIn } from '@fortawesome/fontawesome-free-brands';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import s from './NavBurger.module.scss'
import HeaderLinkBurger from '../headerLinkBurger/HeaderLinkBurger';

const NavBurger = () => {

    return (


        <div className={s.navWrap}>

            <button className={s.buttonClossed}>
                <FontAwesomeIcon icon={faTimes} className={s.buttonClossedIcon} />
            </button>

            <nav className={s.nav}>
                <ul className={s.navItems}>
                    <HeaderLinkBurger
                        to="Home"
                        text="Home"
                    />

                    <HeaderLinkBurger
                        to="About"
                        text="About"
                    />

                    <HeaderLinkBurger
                        to="Projects"
                        text="Projects"
                    />

                    <HeaderLinkBurger
                        to="Education"
                        text="Education"
                    />

                    <HeaderLinkBurger
                        to="Experiense"
                        text="Experiense"
                    />


                    <HeaderLinkBurger
                        to="Testimonials"
                        text="Testimonials"
                    />

                    {/* <HeaderLinkBurger
                    to="Partners"
                    text="Partners"
                /> */}


                    {/* <HeaderLinkBurger
                    to="Blog"
                    text="Blog"
                /> */}

                    <HeaderLinkBurger
                        to="Contact"
                        text="Contact"
                    />

                </ul>
            </nav>

            <div className={s.linksWrap}>

                <div className={s.links}>
                    <a className={`${s.link} ${s.linkFacebook}`} href='https://www.facebook.com/asnipov/' target="_blank">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>

                    <a className={`${s.link} ${s.linkTelegram}`} href='https://t.me/S_Shnipov' target='_blank'>
                        <FontAwesomeIcon icon={faTelegramPlane} />
                    </a>

                    <a className={`${s.link} ${s.linkLinkedin}`} href='https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D1%88%D0%BD%D0%B8%D0%BF%D0%BE%D0%B2-717101204/' target='_blank'>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </div>
            </div>

            <div className={s.footer}>
                <span className={s.footerCopyrightTop}>&copy; 2021</span>
                <span className={s.footerCopyrightBottom}> All rights reserved.</span>
            </div>

        </div>

    )
}

export default NavBurger;