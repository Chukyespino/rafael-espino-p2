
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import SideNav from "./sideNav";
import List from "../pages/list"

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
            
           
          }}
        >
        
          <main>{children}</main>
         
          <ul id="main" className="listTop">
            
            <li className="listA"><h1>Produce</h1><List/></li>
            
            <li className="listA"><h1>Households</h1><List/></li>
            
            <li className="listA"><h1>Meat/Dairy</h1><List/></li>
          </ul>
        
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout