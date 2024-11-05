import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

import LanguageSelector from "../../components/ui/LanguageSelector.jsx";

import styles from './truck.module.scss'
import Layout from "../../components/layout/index.jsx";

const Truck = () => {
	const {t} = useTranslation();
	return (
		<Layout>
			<LanguageSelector />
			<h1 className={styles.h1}>{t("Truck")}</h1>
			<Link to='/'>{t("Home")}</Link>
		</Layout>
	)
}

export default Truck;