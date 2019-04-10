
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import SideNav from "./sideNav";
import List from "../pages/list"
import { ThemeProvider } from "styled-components"
import styled from 'styled-components'
import theme from './themes'

const Blue = styled.div`
  color: ${props => props.theme.themecolor};
  background: ${props => props.theme.themeBlue};
  position: 'fixed';
  font-size: 50px;
  float: left;
  display: block;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  text-align: center;
  padding-right:20px;
  padding-left: 50px;
  padding-bottom: 10px;
  margin-top: 142px;
  `;


const Green = styled.div`
  color: ${props => props.theme.themecolor};
  background: ${props => props.theme.themeGreen};
  
  font-size: 50px;
  float: left;
  display: block;
  text-align: center;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  padding-right:20px;
  padding-left: 50px;
  padding-bottom: 10px;
  margin-top: 142px;
  `;

const Purple = styled.div`
  color: ${props => props.theme.themecolor};
  background: ${props => props.theme.themePurple};
 
  font-size: 50px;
  float: left;
  display: block;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  text-align: center;
  padding-right:20px;
  padding-left: 50px;
  padding-bottom: 10px;
  margin-top: 142px;
  `;

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
            <ThemeProvider theme={theme}>
            <Blue>Produce<List/></Blue>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
            <Green >Households<List/></Green>
             </ThemeProvider>
             <ThemeProvider theme={theme}>
            <Purple>Meat/Dairy<List/></Purple>
            </ThemeProvider>
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