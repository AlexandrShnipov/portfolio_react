import React, { useState, useEffect } from 'react';
import s from './Header.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";
import HeaderLink from "../../common/header/headerLink/HeaderLink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavBurger from './burgerMenu/navBurger/NavBurger';
import { routes } from '../../../App';
import { Link as RouteLink, useHistory, withRouter } from 'react-router-dom';

const links = [
    { link: 'Home' },
    { link: 'About' },
    { link: 'Projects' },
    { link: 'Education' },
    { link: 'Experiense' },
    { link: 'Testimonials' },
    { link: 'Contact' },
]

const renderLinks = () => {
    return links.map((link) => (
        <HeaderLink
            key={link.link}
            to={link.link}
            text={link.link} />
    ));
}

const Header = ({ history: { location: { pathname } } }) => {

    const [menuActive, setMenuActive] = useState(false);

    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.wrap}>

                    <div className={s.logo}>
                        <RouteLink className={s.logoLink}
                            to={routes.MAIN}>
                            <h3 className={s.logoText}>
                                Alexander <span className={s.logoDoted}>.</span>
                            </h3>
                        </RouteLink>
                    </div>
                    {pathname !== routes.TESTIMONIAL
                        &&
                        <div className={s.navWrap}>
                            <nav className={s.nav}>
                                <ul className={s.navItems}>{renderLinks()}   </ul>
                            </nav>
                        </div>
                    }
                    {pathname !== routes.TESTIMONIAL
                        &&
                        <div className={s.linkWrap}>
                            <a className={s.linkTypeTel} type='tel' href='tel:+375297179741'>+375 (29) 717-97-41</a>
                        </div>
                    }
                </div>

                {/* burger menu */}


                <NavBurger active={menuActive} setActive={setMenuActive} />

                {/* button burger */}
                {pathname !== routes.TESTIMONIAL
                    && <button class={s.buttonMenuBurger} type='button' aria-label='open menu' onClick={() => setMenuActive(true)}>
                        <FontAwesomeIcon className={s.buttonMenuIсon} icon={faBars} />
                    </button>}

            </div>

        </header >
    )
}

export default withRouter(Header)