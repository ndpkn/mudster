import React from "react";
import PropTypes from "prop-types";

import Footer from "../blocks/footer";
import Header from "../blocks/header";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
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