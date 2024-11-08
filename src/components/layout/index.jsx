import PropTypes from 'prop-types'
import React from 'react'
import {useLocation} from 'react-router-dom'

import Footer from '../blocks/footer'
import Header from '../blocks/header'

const Layout = ({ children }) => {

	const location = useLocation();

	return (
		<>
			{location.pathname !== '/' && <Header/>}
			<main>
				{children}
			</main>
			<Footer />
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;