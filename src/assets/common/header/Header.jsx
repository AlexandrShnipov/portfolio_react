import React from 'react';
import s from './Header.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";
import HeaderLink from "../../common/header/headerLink/HeaderLink";

const Header = () => {

    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.wrap}>
                    <div className={s.logo}>

                        <Link className={s.logoLink}
                            to="Home"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            <h3 className={s.logoText}>
                                Alexander <span className={s.logoDoted}>.</span>
                            </h3>
                        </Link>
                    </div>

                    <div className={s.NavWrap}>
                        <nav className={s.nav}>
                            <ul className={s.navItems}>
                                <HeaderLink
                                    to="Home"
                                    text="Home"
                                />

                                <HeaderLink
                                    to="About"
                                    text="About"
                                />

                                <HeaderLink
                                    to="Projects"
                                    text="Projects"
                                />

                                <HeaderLink
                                    to="Education"
                                    text="Education"
                                />

                                <HeaderLink
                                    to="Experiense"
                                    text="Experiense"
                                />


                                <HeaderLink
                                    to="Testimonials"
                                    text="Testimonials"
                                />

                                {/* <HeaderLink
                                    to="Partners"
                                    text="Partners"
                                /> */}


                                {/* <HeaderLink
                                    to="Blog"
                                    text="Blog"
                                /> */}

                                <HeaderLink
                                    to="Contact"
                                    text="Contact"
                                />

                            </ul>
                        </nav>
                    </div>

                    <div className={s.LinkWrap}>
                        <a className={s.linkTypeTel} type='tel' href='tel:+375297179741'>+375 (29) 717-97-41</a>
                    </div>

                </div>
            </div>
        </header >
    )
}

export default Header