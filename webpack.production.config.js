const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'hello-world': './src/hello-world.js',
    kiwi: './src/kiwi.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ['handlebars-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      filename: 'hello-world.html',
      chunks: ['hello-world'],
      title: 'Hello World',
      template: 'src/page-template.hbs',
      description: 'hello world',
      minify: false,
    }),
    new HtmlWebPackPlugin({
      filename: 'kiwi.html',
      chunks: ['kiwi'],
      title: 'kiwi',
      template: 'src/page-template.hbs',
      description: 'kiwi',
      minify: false,
    }),
  ],
};
