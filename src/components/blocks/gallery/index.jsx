import PropTypes from 'prop-types'
import React from 'react'
import styles from './gallery.module.scss'

const Gallery = ({images}) => {

	return (
		<section className={styles.gallery}>
			{images.map((image, index) => {
				return (
					<div className={styles.image} key={index}>
						<img src={image} alt="" />
					</div>
				)
			})}
		</section>
	)
}

Gallery.propTypes = {
	images: PropTypes.array
}

export default Gallery;