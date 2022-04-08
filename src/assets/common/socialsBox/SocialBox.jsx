import { Link } from 'react-router-dom';
import s from './SocialBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTelegramPlane, faLinkedinIn, faSkype } from '@fortawesome/fontawesome-free-brands';

const SocialBox = () => {

    return (
        <div className={s.linksWrap}>

            <div className={s.links}>             

                <a className={`${s.link} ${s.linkTelegram}`}
                    href='https://t.me/S_Shnipov'
                    target='_blank'
                    aria-label='my Telegram'>
                    <FontAwesomeIcon icon={faTelegramPlane} />
                </a>

                <a
                    className={`${s.link} ${s.linkLinkedin}`}
                    href="skype:(as04081976)?(chat)"
                    target="_blank"
                    aria-label='my Skype'>
                    <FontAwesomeIcon icon={faSkype} />
                </a>

                <a className={`${s.link} ${s.linkLinkedin}`}
                    href='https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D1%88%D0%BD%D0%B8%D0%BF%D0%BE%D0%B2-717101204/'
                    target='_blank'
                    aria-label='my Linkedin' >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>

                <a className={`${s.link} ${s.linkFacebook}`}
                    href='https://www.facebook.com/asnipov/'
                    target="_blank"
                    aria-label='my Facebook'>
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
            </div>
        </div>
    )
}

export default SocialBox;