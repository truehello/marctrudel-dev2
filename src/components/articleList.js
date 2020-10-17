import React from "react"

import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"


const ArticlesList = () => {
  const data = useStaticQuery(graphql`
    query ArticlesQuery {
      # allMarkdownRemark {
      #   edges {
      #     node {
      #       frontmatter {
      #         slug
      #         title
      #         description
      #         featuredImgURL
      #         featuredImgAlt
      #         keywords
      #       }
      #       id
      #       featuredImg {
      #         childImageSharp {
      #           fluid(
      #             grayscale: true
      #             maxWidth: 400
      #             cropFocus: ATTENTION
      #           ) {
      #             ...GatsbyImageSharpFluid
      #           }
      #         }
      #       }
      #     }
      #   }
      # }
      allFile(
        filter: { ext: { eq: ".md" }, relativeDirectory: { ne: "private" } }
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                title
                slug
                keywords
                featuredImgURL
                featuredImgAlt
                description
              }
              featuredImg {
                childImageSharp {
                  fluid(grayscale: true, maxWidth: 400, cropFocus: ATTENTION) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  //console.log(data.allMarkdownRemark.edges[0].node.featuredImg.childImageSharp.fluid.src);
  //console.log(.allMarkdownRemark.edges[0].node.frontmatter.featdatauredImgAlt)

  return (
    <section className="pb-12">
      <div
       
        className="grid grid-cols-1 md:grid-cols-2 gap-2"
      >
        {data.allFile.edges.map(edge => (
          //  const keywords = edge.node.frontmatter.keywords
          //  console.log(keywords)
          <Link
          
            key={edge.node.id}
            to={`/articles/${edge.node.childMarkdownRemark.frontmatter.slug}`}
            className="flex flex-col justify-between p-6 rounded-md h-64 max-w-md relative overflow-hidden m-4 shadow-md hover:shadow-xl no-underline bg-gray-500 transition-shadow duration-300"
          >
            <Img
              fluid={
                edge.node.childMarkdownRemark.featuredImg.childImageSharp.fluid
              }
              alt={edge.node.childMarkdownRemark.frontmatter.featuredImgAlt}
              className="absolute object-cover top-0 left-0 w-full h-full"
              style={{ position: "absolute" }}
            />

            <h3 className="relative text-white text-lg font-black leading-tight">
              {edge.node.childMarkdownRemark.frontmatter.title}
            </h3>
            <p className="relative text-white text-sm leading-tight">
              {edge.node.childMarkdownRemark.frontmatter.description}
            </p>

            <div className="card_bottom relative flex justify-end text-white">
              <div className="flex items-center justify-center px-2 py-1 border border-transparent text-xs font-semibold rounded-full text-indigo-700 bg-indigo-100 focus:outline-none focus:shadow-outline focus:border-indigo-300">
                {edge.node.childMarkdownRemark.frontmatter.keywords}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default ArticlesList
