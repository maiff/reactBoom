const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./webpack.config')
const port = 8888

const compiler = Webpack(webpackConfig)
const server = new WebpackDevServer(compiler, {
  disableHostCheck: true,
  hot: true,
  publicPath: webpackConfig.output.publicPath, /* ? */
  stats: {
    colors: true
  },
  proxy: {
    '/api': {
      target: 'http://localhost:8000/api/',
      pathRewrite: {'^/api' : ''},
      secure: false,
  },
})
  // opn(`http://localhost:${port}`)
  console.log(`Starting server on http://localhost:${port}`)
})
