import { Link } from 'react-router-dom';
import s from './Footer.module.scss';




const Footer = () => {

         return (
        <footer className={s.footer}>
            <div className={s.container}>
                <a className={s.footerLink} href="/">
                    <span className={s.footerText}>&copy; Alexandr. 2021</span>
               
                </a>
            </div>
        </footer>
    )
}



export default Footer;
