const membersInfo = require('./membersInfo');
const news = require('./homepagenews');

module.exports = {
  siteMetadata: {
    title: `RC Tech Club`,
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
        name: `RC Tech Club`,
        short_name: `RC Tech Club`,
        start_url: `/`,
        background_color: `#2F4A55`,
        theme_color: `#2F4A55`,
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
