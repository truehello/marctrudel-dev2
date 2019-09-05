import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import { Header } from "../components/header"
import Footer from "../components/footer"
//import Transition from "../components/transitions";

// Global application wrapper
export const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />

          <main className="container w-full md:max-w-3xl mx-auto pt-20 px-4 lg:px-0 flex-grow">
            {children}
          </main>

          <Footer siteAuthor={data.site.siteMetadata.author} />
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
