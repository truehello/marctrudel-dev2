---
title: Gatsby Framer Anitmated Page Transitions
description: Animating Page Transitions in Gatsby with Framer Motion
featuredImgURL: https://source.unsplash.com/featured/?space,jupiter
featuredImgAlt: gatsby framer image
slug: gatsby-framer-page-transitions
keywords: Gatsby Framer
---
## Animating Page Transitions in Gatsby with Framer Motion 

Framer Motion makes it simple to add complex animated page transitions to your Gatsby project.  

## Step 1: Install framer Motion

To install the plugin, use your favorite package manager.

```
npm install framer-motion
```

or 

```
yarn add framer motion
```

## Step 2: Edit your Layout component

It is a common pattern in Gatsby development to use a layout component for setting up your site and then have the
pages get generated with the children props passed into the Layout component. Importing Framer here will allow us
to control the animation on routing for page transitions. 

Set your variants to control your animation as desired.

Wrap the div where you pass the children into with the AnimatePresence component the was imported from framer-motion.

Change the div tag that contains the chldren to be motion.div and pass it the variants needed for framer motion. 
Make sure that the otion.div has a key and use the location.pathname to set that key. 


ex:components/Layout.js

```
import React from "react"
import { motion, AnimatePresence } from "framer-motion"

import Header from "../components/header"
import Footer from "../components/footer"

const duration = 0.5

const variants = {
  initial: {
    opacity: 0,
    x: 100
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: { duration: duration },
  },
}

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

          <div className="container">
            <AnimatePresence>
              <motion.main
                key={location.pathname}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {children}
              </motion.main>
            </AnimatePresence>
          </div>

          <Footer siteAuthor={data.site.siteMetadata.author} />

        
        </>
      )
    }}
  />
)



export default Layout


```

## Step 3: Edit gatsby-browser.js

In order for the Layout component get used on every page we can use the gatsby-browser.js file and api
to wrap the Layout componnet arount each page along with the proper location data


ex:gatsby-browser.js

```

import React from "react";
import Layout from "./src/components/Layout";

const transitionDelay = 500;

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
  } else {
    const savedPosition = getSavedScrollPosition(location);
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay
    );
  }
  return false;
};


```


## Credits
[github ryanwiemer](https://github.com/ryanwiemer/gatsby-using-page-transitions) Most of this is a modification of that list of steps

