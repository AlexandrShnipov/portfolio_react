import React from 'react';
import s from './Footer.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';




const Footer = () => {

  const year = new Date().getFullYear()

    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <span className={s.footerCopyright}>&copy; Aliaksander Shnipau. {year}</span>

                <Link className={s.linkUp}
                    aria-label='to go up'
                    to="Home"
                    spy={true}
                    smooth={true}
                    // offset={-70}
                    duration={500}>
                    <FontAwesomeIcon icon={faAngleDoubleUp} />
                </Link>
            </div>
        </footer>
    )
}



export default Footer;
