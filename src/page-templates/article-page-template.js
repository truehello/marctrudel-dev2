import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
//import Layout from "../components/Layout";
import SEO from "../components/seo";

// eslint-disable-next-line react/prop-types
const MaterialsPagesTemplate = ({ data }) => {
  const { content } = data;
  //console.log(JSON.stringify(content.edges[0].node.frontmatter.title))

  return (
    <>
      <SEO title={content.edges[0].node.frontmatter.keywords} />

      <Img
        fluid={content.edges[0].node.featuredImg.childImageSharp.fluid}
        alt={content.edges[0].node.frontmatter.featuredImgAlt}
        className="w-full h-64 mb-16 rounded-t-full"
      />
        
      <div
        className="dangerousHTML"
        dangerouslySetInnerHTML={{
          __html: content.edges[0].node.html,
        }}
      />
    </>
  );
};

export default MaterialsPagesTemplate;

export const query = graphql`
  query($slug: String!) {
    content: allMarkdownRemark(
      filter: { frontmatter: { slug: { eq: $slug } } }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            description
            featuredImgURL
            featuredImgAlt
            keywords
          }
          html
          featuredImg {
            childImageSharp {
              fluid(
                grayscale: true
                maxWidth: 1200
                cropFocus: ATTENTION
              ) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
