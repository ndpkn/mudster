import React from 'react'
import LanguageSelector from '../../ui/languageSelector'

import Logo from '../../ui/logo'

import styles from './footer.module.scss'

const Footer = () => {
	return (
		<footer className={`${styles.footer} container`}>
			<Logo />
			<LanguageSelector />
		</footer>
	)
};

export default Footer;