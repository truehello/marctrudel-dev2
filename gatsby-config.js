module.exports = {
  siteMetadata: {
    title: `Marc Trudel`,
    description: `Marc Trudel is a full-stack developer and designer in Victoria, British Columbia, Canada.`,
    author: `Marc Trudel`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
        //ignore: [`**.md`], // ignore markdown files
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        whitelist: ["gatsby-focus-wrapper", "nc-root", "pre", "code"], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    //`gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: "ubuntu",
              
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-mdx`,
    //   options: {
    //     extensions: ['.mdx', '.md'],
    //     defaultLayouts: {
    //       // This entry template will switch the page template based on
    //       // a frontmatter value provided in the CMS, allowing users to
    //       // choose different template layouts.
    //       default: require.resolve(`${__dirname}/src/page-templates/cms-entry.template.js`)
    //     },
    //   }
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    // {
    //   resolve: `gatsby-plugin-netlify-cms`,
    //   options: {
    //     modulePath: `${__dirname}/src/cms/cms.js`, // for custom preview in the Netlify CMS
    //   },
    // },
  ],
}
