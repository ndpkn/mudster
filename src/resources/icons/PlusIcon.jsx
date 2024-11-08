import PropTypes from 'prop-types'
import React from 'react'
import {ACCENT_COLOR} from '../../constants'

const PlusIcon = ({isOpen}) => {
	const rotationStyle = {
		transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
		transition: 'transform 0.3s ease-in-out'
	};


	return (
		<svg style={rotationStyle} xmlns="http://www.w3.org/2000/svg" height="24px"
			 viewBox="0 -960 960 960" width="24px" fill={ACCENT_COLOR}>
			<path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
		</svg>
	)
}

PlusIcon.propTypes = {
	isOpen: PropTypes.bool
}

export default PlusIcon