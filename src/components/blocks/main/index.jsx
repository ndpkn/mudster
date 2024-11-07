import React from 'react'
import {useTranslation} from 'react-i18next'
import styles from './main.module.scss'

const Main = () => {
	const {t} = useTranslation()

	return (
		<section className={styles.main}>
			<div className={styles.title}>
				<h1>Mudster</h1>
				<span>{t("Subtitle")}</span>
			</div>
		</section>
	);
};

export default Main