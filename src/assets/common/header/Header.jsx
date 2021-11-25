import React, { useState } from 'react';
import s from './Header.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";
import HeaderLink from "../../common/header/headerLink/HeaderLink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavBurger from './burgerMenu/navBurger/NavBurger';

const links = [
    { link: 'Home', name: 'Home' },
    { link: 'About', name: 'About' },
    { link: 'Projects', name: 'Projects' },
    { link: 'Education', name: 'Education' },
    { link: 'Experiense', name: 'Experiense' },
    { link: 'Testimonials', name: 'Testimonials' },
    { link: 'Contact', name: 'Contact' },
]

const renderLinks = () => {
    return links.map((link) => (
        <HeaderLink
            key={link.link}
            to={link.link}
            text={link.name} />
    ));
}

const Header = () => {

    const [menuActive, setMenuActive] = useState(false)

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

                    <div className={s.navWrap}>
                        <nav className={s.nav}>
                            <ul className={s.navItems}>{renderLinks()}   </ul>
                        </nav>
                    </div>

                    <div className={s.linkWrap}>
                        <a className={s.linkTypeTel} type='tel' href='tel:+375297179741'>+375 (29) 717-97-41</a>
                    </div>

                </div>

                {/* burger menu */}

                <NavBurger active={menuActive} setActive={setMenuActive} />

                {/* button burger */}
                <button class={s.buttonMenuBurger} type='button' aria-label='open menu' onClick={() => setMenuActive(true)}>
                    <FontAwesomeIcon className={s.buttonMenuIсon} icon={faBars} />
                </button>
            </div>

        </header >
    )
}

export default Header