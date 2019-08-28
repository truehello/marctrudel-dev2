import React from "react"
//import { Link } from "gatsby"
import PropTypes from "prop-types"



const Footer = ({ siteAuthor }) => (

    <footer className="text-right mt-12 p-4">
            © {new Date().getFullYear()} {siteAuthor}, <span className="text-xs">Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a></span>
    </footer>

)

Footer.propTypes = {
    siteTitle: PropTypes.string,
}

Footer.defaultProps = {
    siteTitle: ``,
}

export default Footer