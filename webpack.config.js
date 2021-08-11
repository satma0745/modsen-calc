/* eslint-disable @typescript-eslint/no-var-requires */
const production = process.env.NODE_ENV === 'production'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  mode: production ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: `${__dirname}/dist/`,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.json'],
        },
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  devtool: production ? undefined : 'source-map',
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' }), new MiniCssExtractPlugin()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
    },
  },
}
