import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Z_BLOCK } from "zlib";

const Header = ({ siteTitle }) => (
  <header
    style={{
      position: "fixed",
      background: `linear-gradient(rgba(3, 7, 75, 0.801),rgba(0, 17, 255, 0.671))`,
      width:'100%',
    }}
  >
    <div
      style={{
        
        margin: `0 auto`,
        maxWidth: 960,
        padding: `3.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            fontSize: 45,
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
