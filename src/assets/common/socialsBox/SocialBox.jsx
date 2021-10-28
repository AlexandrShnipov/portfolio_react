import { Link } from 'react-router-dom';
import s from  './SocialBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF , faTelegramPlane , faLinkedinIn } from '@fortawesome/fontawesome-free-brands';

const SocialBox = () => {

    return (
<div className={s.linksWrap}>
    
<div className={s.links}>
    <Link className={`${s.link} ${s.linkFacebook}`}>
       <FontAwesomeIcon icon={ faFacebookF }/>
    </Link>
    
    <Link className={`${s.link} ${s.linkTelegram}`}>
    <FontAwesomeIcon icon={ faTelegramPlane }/>
    </Link>
    
    <Link className={`${s.link} ${s.linkLinkedin}`}>
    <FontAwesomeIcon icon={ faLinkedinIn }/>
    </Link>
</div>
</div>
    )
}

export default SocialBox;