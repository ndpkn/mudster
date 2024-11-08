import PropTypes from 'prop-types'
import React from 'react'
import {useTranslation} from 'react-i18next'
import Button from '../../ui/button'

import styles from './productMain.module.scss'

const ProductMain = ({title, img}) => {
	const {t} = useTranslation();

	return (
		<section className={`${styles.main} container`}>
			<img className={styles.image} src={img} alt={t(title)}/>
			<p className={styles.title}>{t(title)}</p>
			<Button>{t('Preorder')}</Button>
		</section>
	);
};

ProductMain.propTypes = {
	title: PropTypes.string,
	img: PropTypes.string
};

export default ProductMain;