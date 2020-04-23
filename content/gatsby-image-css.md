---
title: Gatsby Image CSS Absolute
description: Tip about Gatsby Image CSS
featuredImgURL: https://source.unsplash.com/featured/?space
featuredImgAlt: gatsby css image
slug: gatsby-image
keywords: Gatsby CSS
---
## Gatsby Image CSS Position:Absolute 

Gatsby image adds inline css of position:relative and overflow:hidden on rendering. This ends up oversiding any CSS that you try to add with a className. 
To conteract this you will need to add inline css on the element itself.

ex:

```
<Img
    fluid={data.node.childImageSharp.fluid}
    alt={data.node.frontmatter.ImgAlt}
    className="absoluteImage"
    style={{ position: absolute }}
/>


```