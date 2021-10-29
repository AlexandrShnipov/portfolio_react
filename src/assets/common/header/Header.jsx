import { Link } from 'react-router-dom';
import s from './Header.module.scss';


const Header = () => {

    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.wrap}>
                    <div className={s.logo}>
                        <Link className={s.logoLink} to='/'>
                            <h3 className={s.logoText}>
                                Alexander <span className={s.logoDoted}>.</span>
                            </h3>
                        </Link>
                    </div>

                   <div className={s.NavWrap}>
                        <nav className={s.nav}>
                            <ul className={s.navItems}>
                                <li className={s.navItem}>
                                    <Link className={s.navLink} to='/'>Home</Link>
                                </li>
                                <li className={s.navItem}>
                                    <Link className={s.navLink} to='/'>About</Link>
                                </li>
                                <li className={s.navItem}>
                                    <Link className={s.navLink} to='/'>Projects</Link>
                                </li>
                                <li className={s.navItem}>
                                    <Link className={s.navLink} to='/'>Education</Link>
                                </li>
                                <li className={s.navItem}>
                                    <Link className={s.navLink} to='/'>Experiense</Link>
                                </li>
                                <li className={s.navItem}>
                                    <Link className={s.navLink} to='/'>Testimonials</Link>
                                </li>
                                {/* <li className={s.navItem}>
                                        <Link className={s.navLink} to='/'>Partners</Link>
                                    </li> */}
                                {/* <li className={s.navItem}>
                                        <Link className={s.navLink} to='/'>Blog</Link>
                                    </li> */}
                                <li className={s.navItem}>
                                    <Link className={s.navLink} to='/'>Contact</Link>
                                </li>
                            </ul>
                        </nav>
                   </div>
                    <div className={s.LinkWrap}>
                        <a className={s.linkTypeTel} type='tel' href='tel:+375297179741'>+375 (29) 717-97-41</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header