import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
//import Particles from 'react-particles-js'
import { motion, AnimatePresence } from "framer-motion"

import { Header } from "../components/header"
import Footer from "../components/footer"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

deckDeckGoHighlightElement()

const duration = 0.5

const variants = {
  initial: {
    opacity: 0,
    x: 100
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: { duration: duration },
  },
}

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

          <div className="container w-full md:max-w-3xl mx-auto pt-20 px-4 lg:px-0 flex-grow">
            <AnimatePresence exitBeforeEnter>
              <motion.main
                key={location.pathname}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {children}
              </motion.main>
            </AnimatePresence>
          </div>

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
