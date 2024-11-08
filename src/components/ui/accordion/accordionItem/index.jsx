import PropTypes from 'prop-types'
import React, {useEffect, useRef, useState} from 'react'
import PlusIcon from '../../../../resources/icons/PlusIcon'

import styles from './accordionItem.module.scss'

const AccordionItem = ({ title, content }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [height, setHeight] = useState('0px');
	const accordionContent = useRef(null);

	const toggleAccordion = () => {
		setIsOpen(prevState => !prevState);
	};

	useEffect(() => {
		if (isOpen) {
			setHeight(`${accordionContent.current.scrollHeight}px`);
		} else {
			setHeight(`0px`)
		}
	}, [isOpen])

	return (
		<div className={styles.accordionItem}>
			<div className={styles.accordionItem_header} onClick={toggleAccordion}>
				<h3>{title}</h3>
				<PlusIcon isOpen={isOpen} />
			</div>
			<div
				className={styles.accordionItem_content}
				style={{height}}
				ref={accordionContent}
			>
				{content.map((item, index) => (
					<div className={styles.accordionItem_specs} key={index}>
						<p>{item.title}:</p>
						<p>{item.content}</p>
					</div>
				))}
			</div>
		</div>
	);

};

AccordionItem.propTypes = {
	title: PropTypes.string,
	content: PropTypes.array
};

export default AccordionItem;