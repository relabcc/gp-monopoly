module.exports = {
  siteMetadata: {
    title: '一網打盡 能源大地圖',
    description: '所有你該知道的能源大小事',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    // {
    //   resolve: 'gatsby-plugin-gtag',
    //   options: {
    //     trackingId: 'gaId',
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-facebook-pixel',
    //   options: {
    //     pixelId: 'pixel id here',
    //   },
    // },
  ],
  pathPrefix: '/gp-monopoly',
};
