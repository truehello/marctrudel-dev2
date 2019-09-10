import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
//import Particles from 'react-particles-js'

import { Header } from "../components/header"
import Footer from "../components/footer"


// const particlesOptions = {
//   particles: {
//     number: {
//       value: 80,
//       density: {
//         enable: true,
//         value_area: 800
//       }
//     }
//   }
// }
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
        {/* <Particles className='particles' params={particlesOptions} /> */}
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
