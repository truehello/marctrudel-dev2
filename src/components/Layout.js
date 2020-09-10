import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
//import Particles from 'react-particles-js'

import { Header } from "../components/header"
import Footer from "../components/footer"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

// const particlesOptions = {
//   particles: {
//     number: {
//       value: 80,
//       density: {
//         enable: true,
//         value_area: 800
//       }
//     },
//     color: {
//       value: "#9C4221"
//     },
//     shape: {
//       type: "circle",
//       stroke: {
//         width: 0,
//         color: "#000000"
//       },
//       polygon: {
//         nb_sides: 5
//       },
//       image: {
//         src: "imgages/sun.svg",
//         width: 100,
//         height: 100
//       }
//     },
//     opacity: {
//       value: 0.5,
//       random: false,
//       anim: {
//         enable: false,
//         speed: 1,
//         opacity_min: 0.1,
//         sync: false
//       }
//     },
//     size: {
//       value: 3,
//       random: true,
//       anim: {
//         enable: false,
//         speed: 40,
//         size_min: 0.1,
//         sync: false
//       }
//     },
//     line_linked: {
//       enable: true,
//       distance: 150,
//       color: "#9C4221",
//       opacity: 0.4,
//       width: 1
//     },
//     move: {
//       enable: true,
//       speed: 6,
//       direction: "none",
//       random: false,
//       straight: false,
//       out_mode: "out",
//       bounce: false,
//       attract: {
//         enable: false,
//         rotateX: 600,
//         rotateY: 1200
//       }
//     }
//   },
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//       onhover: {
//         enable: true,
//         mode: "repulse"
//       },
//       onclick: {
//         enable: true,
//         mode: "push"
//       },
//       resize: true
//     },
//     modes: {
//       grab: {
//         distance: 400,
//         line_linked: {
//           opacity: 1
//         }
//       },
//       bubble: {
//         distance: 400,
//         size: 40,
//         duration: 2,
//         opacity: 8,
//         speed: 3
//       },
//       repulse: {
//         distance: 200,
//         duration: 0.4
//       },
//       push: {
//         particles_nb: 4
//       },
//       remove: {
//         particles_nb: 2
//       }
//     }
//   },
//   retina_detect: true
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
       
          <Header siteTitle={data.site.siteMetadata.title} />
          
          <main className="container w-full md:max-w-3xl mx-auto pt-20 px-4 lg:px-0 flex-grow">
            {children}
          </main>

          <Footer siteAuthor={data.site.siteMetadata.author} />

          {/* <Particles className='particles' params={particlesOptions} /> */}
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
