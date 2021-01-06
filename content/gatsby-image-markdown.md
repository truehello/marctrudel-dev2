---
title: Using Gatsby Image with Markdown Frontmatter 
description: Tip about Gatsby Image CSS
featuredImgURL: https://source.unsplash.com/featured/?space,stars
featuredImgAlt: using Gatsby Image with Markdown
slug: gatsby-image-markdown
keywords: Gatsby Markdown
---
## Using Gatsby Image with Markdown Frontmatter 

Using Markdown files is a popular way to create content for Gatsby powered sites. Gatsby's image processing API
is another popular reason the pltform is so popular. But how do you leverage the power of the Gatsby Image API while using 
markdown files to create content? The answer lies in GraphQL which is used for both sourcing the markdown content and
transforming the image file with the image API. 

The Gatsby Image API runs during the build process so images need to be avaialble in the GraphQL when the site builds. This will
differ a little depending in whether the images are local or external. Let's look at the different options

### Local Images

First, lets look at a sample markdown file. When you create a Markdown file, you can include a set of key value pairs that can be used to provide additional data relevant to specific pages in the GraphQL data layer. This data is called frontmatter and is denoted by the triple dashes at the start and end of the block. 


```
//sample.md
---
title: What a great Post 
description: the most amazing post ever commited to digital data
image: sampleImage.jpg
imageAlt: using Gatsby Image with Markdown
slug: blog/greatest-post-ever

---
## The Greatest Post Ever Written 
You have never read a better post than this. I've had many people tell me that this was the
greatest post that they ever read. Loads of people.


```

We could of course just source the image path and load it directly, but that defeats one of the main advantages to using 
Gatsby, so we won't do that. The secret sauce to the Gatsby image API is that it uses Sharp to process image nodes in the GraphQL. Thus,
in order to acheive this, we will need to create an image node from the image property in the frontmatter. We do this using a foreign key relationship 
in GraphQL that we institute in the gatsby-node.js file. This runs when the sit eis built.

```
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = [
    `type MarkdownRemark implements Node { frontmatter: Frontmatter }`,
    `type Frontmatter {
      image: File @link(by: "relativePath")
    }`
  ]
  createTypes(typeDefs)
}

```

Then, when you do your GraphQL query, you can do so like this, which will harness the power of Sharp to process the image

```
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          slug
          title
          imageAlt
          description
          # image now points to the image file node
          image {
            childImageSharp {
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
```


### External Images

The theory for external images is the same as with local images, though the imaplementation is a little different. 
The images will be grabbed from the external source during the build process and then process using Sharp with local
versions being created and stored in the public folder of the site. 

Let's first look at the minor difference in the markdown file's frontmatter.

```
//sample.md
---
title: What a great Post 
description: the most amazing post ever commited to digital data
exImage: https://source.unsplash.com/random
imageAlt: using Gatsby Image with Markdown and external images
slug: blog/greatest-post-ever
---
## The Greatest Post Ever Written 
You have never read a better post than this. I've had many people tell me that this was the
greatest post that they ever read. Loads of people.


```

We again need to create a node for the image during the site build process though the gatsby-node.js file, but we do it a little different.

```
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
    node.frontmatter.exImage !== null
  ) {
    let fileNode = await createRemoteFileNode({
      url: node.frontmatter.exImage, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's redux store
    })

    // if the file was created, attach the new node to the parent node
    if (fileNode) {
      node.exImage___NODE = fileNode.id
    }
  }
}
```

Then the image will be avaialble for processing with Sharp. 

```
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          slug
          title
          imageAlt
          description
        }
        exImage {
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
```






### Resources for this Article

[Robin Metral - Stack Overflow](https://stackoverflow.com/questions/62089044/using-frontmatter-in-a-markdownfile-to-query-for-images-in-a-page-query)

[Gatsby Docs - Working with Images](https://www.gatsbyjs.com/docs/recipes/working-with-images/)