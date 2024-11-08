import PropTypes from 'prop-types'
import React from 'react'
import {useTranslation} from 'react-i18next'

import styles from './accordion.module.scss'

import AccordionItem from './accordionItem'

const Accordion = ({product}) => {
	const {t} = useTranslation();

	return (
		<div className={styles.accordion}>
			<AccordionItem title={t('Power')} content={product.power} />
			<AccordionItem title={t('Specs')} content={product.specs} />
			<AccordionItem title={t('Details')} content={product.details} />
		</div>
	);
};

Accordion.propTypes = {
	product: PropTypes.object
}

export default Accordion