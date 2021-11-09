import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTelegramPlane, faLinkedinIn } from '@fortawesome/fontawesome-free-brands';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import s from './NavBurger.module.scss';
import HeaderLinkBurger from '../headerLinkBurger/HeaderLinkBurger';

const links = [
	{ link: 'Home', name: 'Home' },
	{ link: 'About', name: 'About' },
	{ link: 'Projects', name: 'Projects' },
	{ link: 'Education', name: 'Education' },
	{ link: 'Experiense', name: 'Experiense' },
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
						<a
							className={`${s.link} ${s.linkFacebook}`}
							href="https://www.facebook.com/asnipov/"
							target="_blank"
							aria-label='my Facebook'>
							<FontAwesomeIcon icon={faFacebookF} />
						</a>

						<a className={`${s.link} ${s.linkTelegram}`}
							href="https://t.me/S_Shnipov" target="_blank"
							aria-label='my Telegram'>
							<FontAwesomeIcon icon={faTelegramPlane} />
						</a>

						<a
							className={`${s.link} ${s.linkLinkedin}`}
							href="https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D1%88%D0%BD%D0%B8%D0%BF%D0%BE%D0%B2-717101204/"
							target="_blank"
							aria-label='my Linkedin'>
							<FontAwesomeIcon icon={faLinkedinIn} />
						</a>
					</div>
				</div>

				<div className={s.footer}>
					<span className={s.footerCopyrightTop}>&copy; 2021</span>
					<span className={s.footerCopyrightBottom}> All rights reserved.</span>
				</div>
			</div>
		</div>
	);
};

export default NavBurger;
