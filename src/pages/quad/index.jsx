import React from 'react'
import Gallery from '../../components/blocks/gallery'

import ProductMain from '../../components/blocks/productMain'
import Specs from '../../components/blocks/specs'
import Layout from '../../components/layout'
import {QUAD_INFO} from '../../constants/data'
import quadImage1 from '../../resources/images/image1.webp'
import quadImage2 from '../../resources/images/image2.webp'
import quadImage3 from '../../resources/images/image3.webp'
import quadImage4 from '../../resources/images/image4.webp'

const images = [quadImage1, quadImage2, quadImage3, quadImage4]


const QuadPage = () => {
	return (
		<Layout>
			<ProductMain title={QUAD_INFO.title} img={quadImage3} />
			<Specs product={QUAD_INFO}/>
			<Gallery images={images} />
		</Layout>
	)
}

export default QuadPage;