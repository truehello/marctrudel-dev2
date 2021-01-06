---
title: Using Custom Fonts with TailwindCSS and Gatsby
description: Tip about using custom fonts in Gatsby with tailwindcss
featuredImgURL: https://source.unsplash.com/featured/?space,saturn
featuredImgAlt: tailwind custom fonts in gatsby
slug: tailwind-gatsby-custom-fonts
keywords: Tailwind CSS Gatsby
--- 
## Using Custom Fonts in Gatsby using TailwindCSS

Every design benefits form using appropriate fonts. Using custom fonts is another touch that will help your project stand out. In this article I will
go over the steps to implement custom fonts in a Gatsby site that is using the TailwindCSS library for styling. 

One of the benefits if Gatsby is it abstracting of packaging your project. This makes it very easy to host local fonts with your project as opposed to 
importing them Google fonts or another web repository. The benefits of this are site speed as well as the offline performance of your web site or app. To start with this import the fonts that you want using the [fontsource](https://github.com/fontsource/fontsource) package

ex:

```
yarn add @fontsource/roboto // npm install @fontsource/roboto


```

Then you will need to import the font in the gatsby-browser.js file

```
// gatsby-browser.js

import '@fontsource/roboto'

```

Finally, you will need to edit your tailwind.config.js file accordingly. Extending the font family will add your new font as the default
to the exising preset defaults. 

```

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Roboto', ...defaultTheme.fontFamily.sans]
        }
      }
    },
  variants: {},
  plugins: [],
}

```

## Credits
[Scott Watermasysk](https://scottw.com/blog/google-font-tailwind/) 

[Font Source](https://github.com/fontsource/fontsource) 



