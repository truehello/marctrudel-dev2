---
title: Serverless Nextjs on Netlify
description: How to use Netlify to host a serverless Nextjs app
featuredImgURL: https://source.unsplash.com/featured/?space,saturn
featuredImgAlt: nextjs on netlify
slug: nextjs-on-netlify
keywords: NextJS Netlify serverless
---
## Hosting a serverless NextJS App on Netlify 

Netlify is an amazing hosting service that abstract away many layers of deploying websites and apps. It is focused on the Jamstack and thus is
a little different than traditional hosting services. With the focus being on delivering static sites, certain server dependent actions do not happen by default in the nature that many experienced developers are used to. It takes some getting used to, but in my opinion, the benefits of not needing to set up and maintain a server far outweigh the drawbacks.

NextJs is a versatile React framework for producing rich web apps and sites. It can work as a purely static framework but also as a hybrid with server side rendering. It is in this context where it becomes problematic for hosting on Netlify. My issue was that I was implementing authorization tokens with the NextJS getServerSideProps() functionality. With the NextJS app hosted on Netlify being delivered statically, I needed to add serverless functionality to generate and return these props when needed. 

Thankfully, Netlify has simple way to set up your Netlify project to run in a serverless environment. Enter Next-on-Netlify package. From Netlify: "next-on-netlify is a utility for enabling server-side rendering in Next.js on Netlify. It wraps your application in a tiny compatibility layer, so that pages can use Netlify Functions to be server-side rendered."

You can enable SSR in your Next.js applications with 4 simple steps

## Step 1: Install


```
npm install --save next-on-netlify
```

or 

```
yarn add next-on-netlify
```

## Step 2: Setup

Build NextJs as a serverless app. Just create a next.config.js file  in the project root and write the following:


ex:next.config.js

```
module.exports = {
  // Target must be serverless
  target: "serverless",
};

```

## Step 3: Add postbuild hook

The next-on-netlify package adds the next-on-netlify command. When you run this command, magic happens to prepare your Next.js app for hosting on Netlify*.

You will want the next-on-netlify command to run after you build our NextJS application. So add a postbuild hook to your package.json file:

ex:package.json

```

{
  "name": "my-nextjs-app",
  "scripts": {
    "dev": "next",
    "build": "next build",
    "postbuild": "next-on-netlify"
  },
  ...
}

```

## Step 4: Configure Netlify

Create a netlify.toml file in the root of yur project. 

ex:netlify.toml
```
[build]
  command   = "npm run build"
  functions = "out_functions"
  publish   = "out_publish"

```


## Credits
[npm next-on-netlify](https://www.npmjs.com/package/next-on-netlify#setup) Most of this is a modification of that list of steps
[live example](https://next-on.netlify.app) 





