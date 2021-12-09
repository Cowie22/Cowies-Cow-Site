const { redirectData } = require('./redirectData.js')

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'develop') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-hot-loader/,
            use: [
              loaders.js()
            ]
          }
        ]
      }
    })
  }
  actions.setWebpackConfig({
    node: {
      fs: "empty",
      child_process: "empty",
    },
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions; //actions is collection of many actions - https://www.gatsbyjs.org/docs/actions
  redirectData.map((redirect, i) => {
    const { from, to } = redirect;
    return (
      createRedirect({
        fromPath: from.toLowerCase(),
        toPath: to,
        isPermanent: true,
        statusCode: 301,
        redirectInBrowser: true,
        force: true,
      })
    )
  })
  // if (typeof window !== "undefined") {
  //   let originalUrl = window.location.href;
  //   let lowerCaseUrl = originalUrl.toLowerCase();
  //   console.log('OG', originalUrl)
  //   if (originalUrl !== lowerCaseUrl) {
  //     createRedirect({
  //       fromPath: originalUrl,
  //       toPath: lowerCaseUrl,
  //       isPermanent: true,
  //       statusCode: 301,
  //       redirectInBrowser: true,
  //       force: true,
  //     })
  //   }
  // }
}