import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTelegramPlane, faLinkedinIn, faSkype } from '@fortawesome/fontawesome-free-brands';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import s from './NavBurger.module.scss';
import HeaderLinkBurger from '../headerLinkBurger/HeaderLinkBurger';

const links = [
	{ link: 'Home', name: 'Home' },
	{ link: 'About', name: 'About' },
	{ link: 'Projects', name: 'Projects' },
	{ link: 'Education', name: 'Education' },
	{ link: 'Experience', name: 'Experience' },
	{ link: 'Testimonials', name: 'Testimonials' },
	{ link: 'Contact', name: 'Contact' }
];

const NavBurger = (props) => {
	const onCloseMenu = () => {
		props.setActive(false);
	};

	const renderLinks = () => {
		return links.map((link) => (
			<HeaderLinkBurger
				key={link.link}
				to={link.link}
				text={link.name}
				onClose={onCloseMenu} />
		));
	};

	return (
		<div className={props.active ? `${s.navBurgerWrap} ${s.active}` : s.navBurgerWrap}>
			<div className={s.navWrap}>
				<button className={s.buttonClossed} aria-label='close menu' onClick={onCloseMenu}>
					<FontAwesomeIcon icon={faTimes} className={s.buttonClossedIcon} />
				</button>

				<nav className={s.nav}>
					<ul className={s.navItems}>{renderLinks()}</ul>
				</nav>

				<div className={s.linksWrap}>
					<div className={s.links}>					

						<a className={`${s.link} ${s.linkTelegram}`}
							href="https://t.me/S_Shnipov" target="_blank"
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

						<a
							className={`${s.link} ${s.linkLinkedin}`}
							href="https://linkedin.com/in/aliaksander-shnipau-717101204"
							target="_blank"
							aria-label='my Linkedin'>
							<FontAwesomeIcon icon={faLinkedinIn} />
						</a>

						<a
							className={`${s.link} ${s.linkFacebook}`}
							href="https://www.facebook.com/asnipov/"
							target="_blank"
							aria-label='my Facebook'>
							<FontAwesomeIcon icon={faFacebookF} />
						</a>
					</div>
				</div>

				<div className={s.footer}>
					<span className={s.footerCopyrightTop}>&copy; 2022</span>
					<span className={s.footerCopyrightBottom}> All rights reserved.</span>
				</div>
			</div>
		</div>
	);
};

export default NavBurger;
