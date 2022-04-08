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
                    className={`${s.link} ${s.linkSkype}`}
                    href="skype:as04081976?chat"
                    target="_blank"
                    aria-label='my Skype'>
                    <FontAwesomeIcon icon={faSkype} />
                </a>

                <a className={`${s.link} ${s.linkLinkedin}`}
                    href='https://www.linkedin.com/in/alexander-shnipov-717101204/'
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