const membersInfo = require('./membersInfo');

module.exports = {
  siteMetadata: {
    title: `RC Tech`,
    description: `Developer community at RC Lee Hall`,
    author: `@rcltech`,
    keywords: [`rctech`, `hku`, `rclee`],
    ...membersInfo
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
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        optimizeId: "GTM-MNWD3QK",
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "rcltech.github.io",
      },
    },
  ],
}
