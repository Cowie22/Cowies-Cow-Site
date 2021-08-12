module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
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
          `Mulish\:400,500,700`,
          `Source Sans Pro\:400,500,700`,
        ],
        display: 'swap',
        attributes: {
          rel: "stylesheet preload prefetch",
        },
      }
    },
  ],
}
