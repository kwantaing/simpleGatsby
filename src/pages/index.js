import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/main/">Go to Main</Link> <br />
    {/* <Link to="/coffeeTypes/"> Go to Coffee Types</Link> <br/> */}
    <Link to="/categories/"> Go to Coffee Types</Link> <br/>
    {/* <Link to="/allCoffees/">Go to All Coffees</Link><br/> */}
    <Link to="/coffees/">Go to All Coffees</Link>
    {/* <a href="/main">Go to Main</a> */}
  </Layout>
)

export default IndexPage
