import React from 'react';
import s from './LinkColor.module.scss';

const LinkColor = (props) => {
	return (
		<a className={s.link}
			href={props.href}
			target="_blank">
			{props.text}
		</a>
	);
};

export default LinkColor;
