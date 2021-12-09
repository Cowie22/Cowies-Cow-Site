const { redirectData } = require('./redirectData.js')

exports.onCreateWebpackConfig = function onCreateWebpackConfig({ actions, stage, loaders }) {
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
}

exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions;
  redirectData.map((redirect, i) => {
    const { from, to } = redirect;
    return (
      createRedirect({
        fromPath: from,
        toPath: to,
        isPermanent: true,
        statusCode: 301,
        redirectInBrowser: true,
        force: true,
      })
    )
  })
}