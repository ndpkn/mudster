import React from "react";
import {Link} from "react-router-dom";

import Layout from "../../components/layout/index.jsx";

import './main.scss'

function Index() {
  return (
    <Layout>
        <h1>MUDSTER</h1>
        <button><Link to='truck'>Truck</Link></button>
        <button><Link to='quad'>Quad</Link></button>
    </Layout>
  )
}

export default Index
