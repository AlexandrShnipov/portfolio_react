import { Link, animateScroll as scroll } from "react-scroll";
import s from './HeaderLinkBurger.module.scss';

const HeaderLinkBurger = (props) => {

    return (
   
            <li className={s.navItem}>
                <Link className={s.navLink}
                    activeClass={s.active}
                    to={props.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={props.onClose}
                     >{props.text}
                   
                </Link>
            </li>
    
        )
  
}

export default HeaderLinkBurger;