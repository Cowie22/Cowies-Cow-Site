// In order to use PM2 and deploy to the staging server, you need to comment out gatsby-plugin-minify and gatsby-plugin-brotli.
// However, these two plugins dramatically increase page speeds, so make sure to utilize them before building the code you intend
// To use for production.

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-minify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager-delayed",
      options: {
        id: "GTM-MV77PCG",
        includeInDevelopment: true,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    // {
    //   resolve: 'gatsby-plugin-brotli',
    //   options: {
    //     extensions: ['css', 'html', 'js', 'svg', 'jsx', 'webp', 'scss', 'png', 'jpg']
    //   }
    // },
    {
      resolve: `gatsby-plugin-google-fonts-with-attributes`,
      options: {
        fonts: [
          `Barlow\:400,500,700`,
        ],
        display: 'swap',
        attributes: {
          rel: "stylesheet preload prefetch",
        },
      }
    },
  ],
}
