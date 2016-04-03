const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      //Loader for JS and JSX
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      //Loader for non-modules css
      {
        test: /^((?!\.module).)*\.css$/,
        loaders: [
          'style',
          'css?sourceMap'
        ]
      },
      //Loader for css modules
      {
        test: /\.module\.css$/,
        loaders: [
          'style',
          'css?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!'
        ]
      },
      //Loader for fonts
      {
        test: /\.(woff2?|ttf|eot|svg)$/,
        loader: 'url?limit=65000'
      }
    ]
  }
};
