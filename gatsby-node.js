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

// for creating the secure account area
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/account/)) {
    page.matchPath = "/account/*"

    // Update the page.
    createPage(page)
  }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    /*
     * During the build step, `auth0-js` will break because it relies on
     * browser-specific APIs. Fortunately, we don’t need it during the build.
     * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
     * during the build. (See `src/utils/auth.js` to see how we prevent this
     * from breaking the app.)
     */
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-js/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}