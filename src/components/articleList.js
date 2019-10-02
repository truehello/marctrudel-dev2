import React from "react"
import { graphql, StaticQuery } from "gatsby"
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
        <ul>
          {menu.map((item, i) => (
            <li key={i} className="card rounded overflow-hidden shadow-lg mb-4 my-4 p-4">
              <a href={item.url}>{item.text}</a>
            </li>
          ))}
        </ul>
      )
    }}
  />
)

export default ArticleList
