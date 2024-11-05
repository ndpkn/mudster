import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import translationInRu from "../locales/ru/translation.json";
import translationInEn from "../locales/en/translation.json";

const resources ={
	ru: {
		translation: translationInRu,
	},
	en: {
		translation: translationInEn,
	},
}

i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: "ru",
		debug: true,
		fallbackLng: "de",
		interpolation: {
			escapeValue: false
		},
		ns: "translation",
		defaultNS: "translation"
	});

export default i18n;