import React from 'react'
import {Link} from 'react-router-dom'

import {HOME_LINK} from '../../../constants'

import styles from './logo.module.scss'

const Logo = () => {
	return (
		<Link to={HOME_LINK}>
			<div className={styles.logo}>
				<h2>Mudster</h2>
			</div>
		</Link>
	);
};

export default Logo;