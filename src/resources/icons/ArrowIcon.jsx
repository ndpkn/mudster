import React from 'react'
import {ACCENT_COLOR} from '../../constants'

const ArrowIcon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill={ACCENT_COLOR}>
			<path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/>
		</svg>
	)
}

export default ArrowIcon;