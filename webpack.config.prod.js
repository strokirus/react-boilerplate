const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config.js');

config.mode = 'production';
config.devtool = false;
config.output.publicPath = '/';
config.output.pathinfo = false;
config.output.filename = 'bundle.[chunkhash].js';
config.entry = ['./src/index.js'];

const extractSCSSModules = new MiniCssExtractPlugin({
  filename: 'styles.[chunkhash].css',
  disable: false,
  allChunks: true,
});

const extractSCSSGlobals = new MiniCssExtractPlugin({
  filename: 'global-styles.[chunkhash].css',
  disable: false,
  allChunks: true,
});

const extractCSSLibs = new MiniCssExtractPlugin({
  filename: 'libraries.[chunkhash].css',
  disable: false,
  allChunks: true,
});

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
  }),
  new HtmlWebpackPlugin({
    template: './index.ejs',
    inject: 'body',
  }),
  new webpack.DefinePlugin({
    'process.env': {
      FIDELTRYOUT_VERSION: JSON.stringify(require('./package.json').version), // eslint-disable-line
    },
  }),
  extractSCSSGlobals,
  extractSCSSModules,
  extractCSSLibs,
];

config.module.rules = [{
  test: /\.js$/,
  exclude: /(node_modules)/,
  use: [
    { loader: 'babel-loader' },
  ],
}, {
  test: /\.css$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: false,
        sourceMap: true,
        importLoaders: 1,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins: () => [autoprefixer({ browsers: ['last 4 versions'] })],
      },
    },
    'style-loader'
  ],
}, {
  test: /\.global\.scss$/,
  exclude: /(node_modules)/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: false,
        sourceMap: true,
        importLoaders: 1,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins: () => [autoprefixer({ browsers: ['last 4 versions'] })],
      },
    },
    {
      loader: 'sass-loader',
    },
    'style-loader'
  ],
}, {
  test: /^((?!\.global).)*scss$/,
  exclude: /(node_modules)/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: true,
        sourceMap: true,
        importLoaders: 1,
        localIdentName: '[name]__[local]__[hash:base64:5]',
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins: () => [autoprefixer({ browsers: ['last 4 versions'] })],
      },
    },
    'sass-loader',
  ]
}, {
  test: /\.(png|jpg|gif)$/,
  exclude: /(node_modules)/,
  use: [{
    loader: 'url-loader?name=images/[name].[ext]&limit=8192',
  }],
}];

module.exports = config;
