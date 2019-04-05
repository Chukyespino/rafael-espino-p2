
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import SideNav from "./sideNav";
import List from "../pages/list"
import ListItems from "./items";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>  
        <Header siteTitle={data.site.siteMetadata.title} />
        <SideNav/>
        
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 500,
           
          }}
        >
        
          <main>{children}</main>
            <List/>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
// }


// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
// }