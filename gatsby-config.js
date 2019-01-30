const membersInfo = require('./membersInfo');
const news = require('./homepagenews');

module.exports = {
  siteMetadata: {
    title: `RC Tech`,
    description: `Developer community at RC Lee Hall`,
    author: `@rcltech`,
    keywords: [`rctech`, `hku`, `rclee`],
    ...membersInfo,
    ...news
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RC Tech`,
        short_name: `RC Tech`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-133175756-1",
      },
    },
  ],
}
