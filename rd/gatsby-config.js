const siteConfig = require('./site-config');

require('dotenv').config();

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
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
    {
      resolve: 'gatsby-plugin-mixpanel',
      options: {
        apiToken: 'd2ff0f572578288a35552dd0e28c8e31', // required
        enableDevMode: true,
        mixpanelConfig: null, // override specific config for mixpanel initialization https://github.com/mixpanel/mixpanel-js/blob/8b2e1f7b/src/mixpanel-core.js#L87-L110
        pageViews: 'all', // see below
        // set pageViews to 'all' and use this option to set the same event name for all page view events
        trackPageViewsAs: 'Page View', // optionally: set an Event Name to use for all page views, eg: trackPageViewsAs: 'Page view'
        getPageViewTransformerFn: 'return () => ({url: location})', // optionally: function body as a string to customize the event sent to mixpanel. Receives one parameter: location. Example 'return () => ({url: location.pathname})
      },
    },
  ],
};
