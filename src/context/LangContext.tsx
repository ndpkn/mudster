import {createContext, useState} from "react";

export const LangContext = createContext(null)

export const LangProvider = ({ children }) => {
	const [lang, setLang] = useState('ru');

	const toggleLanguage = () => {
		setLang(prevLang => (prevLang === 'en' ? 'ru' : 'en'));
	};

	return (
		<LangContext.Provider value={{ lang, toggleLanguage }}>
			{children}
		</LangContext.Provider>
	);
};