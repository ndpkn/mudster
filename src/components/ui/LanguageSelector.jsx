import React from "react";
import {useState} from "react";

import i18n from "../../i18n/index.js";

const LanguageSelector = () => {
	const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

	const chooseLanguage = (e) => {
		e.preventDefault();
		i18n.changeLanguage(e.target.value);
		setSelectedLanguage(e.target.value);
	};

	return (
		<select defaultValue={selectedLanguage} onChange={chooseLanguage}>
			<option value="ru">Русский</option>
			<option value="en">English</option>
		</select>
	);
}

export default LanguageSelector;