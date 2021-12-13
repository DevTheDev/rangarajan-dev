const siteConfig = require('./site-config');

require('dotenv').config();

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-autolink-headers',
        ],
      },
    },
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-background-image',
    'gatsby-transformer-sharp',
    'react-masonry-component',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sassRuleModulesTest: /.*\.module\.s(a|c)ss$/,
      },
    },
    'gatsby-plugin-webpack-size',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/.*\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Dev Rangarajan',
        short_name: 'DR',
        start_url: '/',
        lang: 'en',
        background_color: '#FFF',
        theme_color: '#97C4F7',
        display: 'standalone',
        icon: `${__dirname}/content/images/DR.svg`, // This path is relative to the root of the site.
        theme_color_in_head: false,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-R8M8SXX8B0', // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: 'OPT_CONTAINER_ID',
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
  ],
};
