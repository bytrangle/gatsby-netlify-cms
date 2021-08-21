module.exports = {
    siteMetadata: {
      title: `Gatsby Default Starter`,
      description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
      author: `@gatsbyjs`,
      siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-image`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `markdown-pages`,
          path: `${__dirname}/content/blog__netlify-cms`
        }
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`]
        }
      },
      // {
      //   resolve: `gatsby-transformer-remark`,
      //   options: {
      //     plugins: [
      //       {
      //         resolve: `gatsby-remark-cloudinary`
      //       }
      //     ]
      //   }
      // },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `gatsby-starter-default`,
          short_name: `starter`,
          start_url: `/`,
          background_color: `#663399`,
          theme_color: `#663399`,
          display: `minimal-ui`,
          icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
        }
      },
      `gatsby-plugin-gatsby-cloud`,
      // {
      //   resolve: `gatsby-plugin-netlify-cms`,
      //   options: {
      //     modulePath: `${__dirname}/src/cms/cms.js`
      //   }
      // }
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
    ]
}
  