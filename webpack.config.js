const glob = require('glob');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgeCssPlugin = require('purgecss-webpack-plugin');

const paths = {
  dist: path.join(__dirname, 'dist'),
  src: path.join(__dirname, 'src'),
};

module.exports = {
  entry: path.join(paths.src, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: paths.dist,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new PurgeCssPlugin({
      paths: glob.sync(path.join(paths.dist, '*.html')),
      safelist: [/tooltip/, /fade/, /show/],
    }),
  ],
  devServer: {
    contentBase: paths.dist,
    compress: true,
    port: 9000,
  },
};
