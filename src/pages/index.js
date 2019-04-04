import React from "react"
import List from "./list"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SideNav from "../components/sideNav"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/* <SideNav>

    </SideNav> */}
    <List>
    </List>
  </Layout>
)

export default IndexPage
