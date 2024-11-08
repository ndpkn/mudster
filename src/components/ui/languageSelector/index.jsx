import React, {useState} from 'react'

import i18n from '../../../i18n'

import styles from './langSelector.module.scss'

const LanguageSelector = () => {
	const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

	const chooseLanguage = (e) => {
		i18n.changeLanguage(e);
		setSelectedLanguage(e);
	};

	return (
		<button className={styles.button} onClick={() => chooseLanguage(selectedLanguage === "ru" ? "en" : "ru")}>
			{selectedLanguage === "ru" ? "EN" : "РУС"}
		</button>
	);
}

export default LanguageSelector;