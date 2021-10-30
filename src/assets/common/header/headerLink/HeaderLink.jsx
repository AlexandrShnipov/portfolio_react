import React from 'react';
import s from './HeaderLink.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";

const HeaderLink = (props) => {

    return (
        <li className={s.navItem}>
            <Link className={s.navLink}
                activeClass={s.active}
                to={props.to}
                spy={true}
                smooth={true}
                duration={500}>{props.text}
            </Link>
        </li>

    )
}

export default HeaderLink;