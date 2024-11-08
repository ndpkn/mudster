import PropTypes from 'prop-types'
import React from 'react'

import styles from './button.module.scss'

const Button = ({ children }) => {
	return (
		<button className={styles.button}>
			{children}
		</button>
	)
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Button;