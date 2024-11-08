import React from 'react'

import Logo from '../../ui/logo'

import styles from './header.module.scss'

const Footer = () => {
	return (
		<header className={`${styles.header} container`}>
			<Logo />
		</header>
	)
};

export default Footer;