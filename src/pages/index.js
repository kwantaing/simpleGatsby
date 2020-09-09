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
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/main/">Go to Main</Link> <br />
  </Layout>
)

export default IndexPage
