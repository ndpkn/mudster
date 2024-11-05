import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

import styles from './quad.module.scss'
import Layout from "../../components/layout";

const Quad = () => {
	const {t} = useTranslation()

	return (
		<Layout>
			<h1 className={styles.h1}>{t('Quad')}</h1>
			<Link to='/'>{t('Home')}</Link>
		</Layout>
	)
}

export default Quad;