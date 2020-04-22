import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import { safelyGetSiteConfig } from "../cms"

export const query = graphql`
  query {
    sitePage(path: { eq: "/config/" }) {
      context {
        frontmatter {
          menu_nav {
            text
            url 
          }
        }
      }
    }
  }
`

const ArticleList = () => (
  <StaticQuery
    query={query}
    render={data => {
      const menu = safelyGetSiteConfig(data.sitePage).menu_nav || []
      return (
        <div className="grid grid-cols-2 gap-4">
          {menu.map((item, i) => (
            <Link
              key={i}
              to={item.url}
              className="flex flex-col justify-between p-6 rounded-md h-64 max-w-md relative overflow-hidden m-4 no-underline shadow-md hover:shadow-xl bg-gray-500 transition-shadow duration-300"
            >
              <img
                className="absolute object-cover top-0 left-0 w-full h-full"
                // src={edge.node.frontmatter.featuredImgUrl}
                src="https://unsplash.it/1304?space"
                alt="random image name"
              />

              <h3 className="relative text-white text-2xl font-black leading-tight">
                {item.text}
              </h3>
              {/* <h4 className="relative text-white text-lg fontbold leading-tight">
              {edge.node.frontmatter.snippet}
            </h4> */}
              <div className="card_bottom relative flex justify-end text-white">
                <div className="flex items-center justify-center px-2 py-1 ml-2 border border-transparent text-xs font-semibold rounded-full text-indigo-700 bg-indigo-100 focus:outline-none focus:shadow-outline focus:border-indigo-300">
                  tailwind CSS
                </div>
                <div className="flex items-center justify-center px-2 py-1 ml-2 border border-transparent text-xs font-semibold rounded-full text-indigo-700 bg-indigo-100 focus:outline-none focus:shadow-outline focus:border-indigo-300">
                  Gatsby
                </div>
              </div>
            </Link>
          ))}
        </div>
      )
    }}
  />
)

export default ArticleList
