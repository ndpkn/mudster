import React from 'react'
import {useTranslation} from 'react-i18next'

import {QUAD_LINK, TRUCK_LINK} from '../../../constants'
import truckImage from '../../../resources/images/image1.webp'
import quadImage from '../../../resources/images/image3.webp'

import styles from './productsLinks.module.scss'
import ProductItem from './productsLinksItem'

const Products = () => {
	const { t } = useTranslation();

	const products = [
		{
			name: t('Truck'),
			link: TRUCK_LINK,
			img: truckImage,
		},
		{
			name: t('Quad'),
			link: QUAD_LINK,
			img: quadImage,
		},
	];

	return (
		<section className={`${styles.products} container`}>
			{products.map((product) => {
				return (
					<ProductItem
						key={product.name}
						name={product.name}
						link={product.link}
						img={product.img}
					/>
				)
			})}
		</section>
	);
};

export default Products;