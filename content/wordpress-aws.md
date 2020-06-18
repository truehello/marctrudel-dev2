---
title: Wordpress Multisite AWS
description: Setting up a Multisite Wordpress Server on AWS
featuredImgURL: https://source.unsplash.com/featured/?space,astronaut
featuredImgAlt: wordpress AWS multisite image
slug: aws-wordpress-multisite
keywords: AWS, Wordpress
---



[Tailwindcss](https://www.tailwindcss.com) is a CSS utility framework, and it's quickly become my favorite way to build an interface. Oftentimes, the hardest part of trying out a new framework, package, or language is getting set up.
The folks building Tailwind have done an incredible job documenting the process, and it's super easy to do. But, sometimes it's still nice to see how someone else did it. So, let's jump in and see how it's done.


## Step 1: Install gatsby-plugin-postcss
gatsby-plugin-postcss is a Gatsby plugin that allows you to use PostCSS features in CSS files that you import into pages/components. Tailwind is built on PostCSS, so this is a great starting point!

To install the plugin, use your favorite package manager.

** Using NPM **
```
npm install --save gatsby-plugin-postcss
```
** Using Yarn **
```
yarn add gatsby-plugin-postcss
```


## Step 2: Configure Gatsby to Use the PostCSS Plugin
Now that we've installed a plugin, we need to configure Gatsby to use it!

Open up your gatsby-config.js, and add 'gatsby-plugin-postcss' to the plugins array.

// gatsby-config.js
```
module.exports = {
    siteMetadata: { ... },
    plugins: [
        'gatsby-plugin-postcss',
        // ...
    ]
}
```


## Step 3: Add PostCSS Config File
Our PostCSS plugin is installed, and Gatsby is using it, so all that's left is to configure the PostCSS side of things! To configure PostCSS, create an empty postcss.config.js file in your project's root (the same folder as the gatsby-config.js file).

## Step 4: Install Tailwind
Now before we configure PostCSS to use Tailwind, we need to install it.

** Using NPM **
```
npm install tailwindcss --save-dev
```

** Using Yarn**
```
yarn add tailwindcss --dev
```


## Step 5: Generate Tailwind Config File
To configure Tailwind, we'll need to add a Tailwind configuration file. Luckily, Tailwind has a built-in script to do this. Just run the following command (again, in your project's root directory).

npx tailwind init tailwind.config.js

This will create a tailwind.config.js file containing Tailwind's default configuration.

## Step 6: Configure PostCSS
Okay, we've installed and configured Tailwind, now back to our PostCSS config. We need to add Tailwind to PostCSS's list of plugins.

// postcss.config.js
```
const tailwind = require('tailwindcss')

module.exports = () => ({
    plugins: [tailwind('./tailwind.js')],
})

```
In the example above, you'll see we're passing in a file path. That is the path to our configuration file. So if you'd like to move or rename the Tailwind configuration file, just remember to change the file path in your postcss.config.js file.

Note: You can add any other PostCSS plugins that you'd like to use, like autoprefixer, before or after Tailwind in the array of plugins.

## Step 7: Add CSS File With Tailwind Directives
Everything should be ready to go, all we need to do now is to actually use Tailwind within our CSS! First, create a global.css file. I put mine at src/css/tailwind.css. Then, add the following Tailwind directives to your new file:

// tailwind.css

```
@tailwind base;

@tailwind components;

@tailwind utilities;
```

For this step, I opted to create a new tailwind.css file, but you could just as easily put the Tailwind directives in an existing CSS file.

## Step 8: Import Our Tailwind CSS
The last thing we need to do is to import our new CSS file into a page or layout so that our Tailwind CSS is actually injected into our pages. In gatsby-browser.js, or wherever you want your Tailwind CSS to appear, add the following import:

// gatsby-browser.js
```
import "./src/css/tailwind.css"
```


## Credits
[Dev.to Jake Dohn](https://dev.to/jakedohm_34/using-tailwind-with-gatsby-js-10fj) Most of this is a modification of that list of steps

