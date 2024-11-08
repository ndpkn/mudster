import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'react-router-dom'
import ArrowIcon from '../../../../resources/icons/ArrowIcon'

import styles from './productsLinksItem.module.scss'

const ProductItem = ({name, link, img}) => {
	return (
		<div className={styles.product}>
			<Link to={link}>
				<img className={styles.image} src={img} alt={name} />
				<div className={styles.title}>
					<p>{name}</p>
					<ArrowIcon />
				</div>
			</Link>
		</div>
	)
}

ProductItem.propTypes = {
	name: PropTypes.string,
	link: PropTypes.string,
	img: PropTypes.string
}

export default ProductItem;