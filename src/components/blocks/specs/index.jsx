import PropTypes from 'prop-types'
import React from 'react'
import {useTranslation} from 'react-i18next'
import Accordion from '../../ui/accordion'
import BlockHeader from '../../ui/blockHeader'

import styles from './specs.module.scss'

const Specs = ({product}) => {
	const {t} = useTranslation();

	return (
		<section className={styles.specs}>
			<div className='container'>
				<BlockHeader title={t('Specs')} color={'dark'} />
				<Accordion product={product} />
			</div>
		</section>
	)
};

Specs.propTypes = {
	product: PropTypes.object
}

export default Specs;