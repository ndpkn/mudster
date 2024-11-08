import PropTypes from 'prop-types'
import React from 'react'

import styles from './blockHeader.module.scss'

const BlockHeader = ({title, color}) => {
	return (
		<div className={`${styles.header} ${color === 'light' ? styles.light : styles.dark}`}>
			<h3>{title}</h3>
		</div>
	);
};

BlockHeader.propTypes = {
	title: PropTypes.string,
	color: PropTypes.oneOf(['dark', 'light'])
};

export default BlockHeader;