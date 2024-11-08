import React from 'react'

import Main from '../../components/blocks/main'
import Products from '../../components/blocks/productsLinks'
import Layout from '../../components/layout/index.jsx'

import './main.scss'

function MainPage() {
  return (
    <Layout>
        <Main />
        <Products />
    </Layout>
  )
}

export default MainPage;
