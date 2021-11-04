import React from "react";
import s from './NavBurger.module.scss'
import HeaderLinkBurger from './headerLinkBurger/HeaderLinkBurger';

return NavBurger = () => {

    return (
        <div className={s.NavWrap}>
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
    </div>

    )
}

export default NavBurger;