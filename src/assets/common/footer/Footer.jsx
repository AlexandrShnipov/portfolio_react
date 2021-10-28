import { Link } from 'react-router-dom';
import s from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';




const Footer = () => {

    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <a className={s.footerLink} href="/">
                    <span className={s.footerText}>&copy; Alexandr. 2021</span>
                </a>
                <a className={s.linkUp} href="/">
                <FontAwesomeIcon icon={ faAngleDoubleUp }/>
                </a>
            </div>
        </footer>
    )
}



export default Footer;
