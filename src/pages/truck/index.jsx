import React from 'react'
import Gallery from '../../components/blocks/gallery'

import ProductMain from '../../components/blocks/productMain'
import Specs from '../../components/blocks/specs'
import Layout from '../../components/layout/index.jsx'
import {TRUCK_INFO} from '../../constants/data'
import truckImage1 from '../../resources/images/image1.webp'
import truckImage2 from '../../resources/images/image2.webp'
import truckImage3 from '../../resources/images/image3.webp'
import truckImage4 from '../../resources/images/image4.webp'

const images = [truckImage1, truckImage2, truckImage3, truckImage4]

const TruckPage = () => {
	return (
		<Layout>
			<ProductMain title={TRUCK_INFO.title} img={truckImage2} />
			<Specs product={TRUCK_INFO}/>
			<Gallery images={images} />
		</Layout>
	)
}

export default TruckPage;