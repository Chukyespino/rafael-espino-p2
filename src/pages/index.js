import React from "react"
import List from "./list"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <List>
    </List>
  </Layout>
)

export default IndexPage
