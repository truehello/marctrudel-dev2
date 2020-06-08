const path = require("path");

const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }

    type Frontmatter {
      title: String!
      featuredImgURL: String
      featuredImgAlt: String
    }
  `)
}

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  store,
  cache,
  createNodeId,
}) => {
  // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
  if (
    node.internal.type === "MarkdownRemark" &&
    node.frontmatter.featuredImgURL !== null
  ) {
    let fileNode = await createRemoteFileNode({
      url: node.frontmatter.featuredImgURL, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's redux store
    })

    // if the file was created, attach the new node to the parent node
    if (fileNode) {
      node.featuredImg___NODE = fileNode.id
    }
  }
}


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    //query the graphql for all the folders in Galleries to create pages
    //then query for each image in the folders to create a page for that image. 
    const result = await graphql(`
      query {
        allMarkdownRemark(sort: {order: ASC, fields: id}) {
            edges {
              node {
                frontmatter {
                  slug
                }
              }
            }
        }
      }
    `)
  
    //create a page for each album
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
       
      createPage({
        path: `/articles/${node.frontmatter.slug}`,
        component: path.resolve(`./src/page-templates/article-page-template.js`),
        context: {
          slug: node.frontmatter.slug,
        },
      })
    })

}