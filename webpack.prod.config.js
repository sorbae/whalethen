const webpack = require('webpack')
const path = require('path')

const DIST_DIR = path.resolve(__dirname, 'client/dist');
const SRC_DIR = path.resolve(__dirname, 'client/');

module.exports = {
  devtool: 'source-map',

  entry: [
    `${SRC_DIR}/index.js`,
  ],

  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/client/',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production',
      },
    }),
  ],

  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'env'],
        },
      },
    ],
  },
};
