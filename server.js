const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const port = 3000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(port, 'localhost', function(err) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:' + port);
});
