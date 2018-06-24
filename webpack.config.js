const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production' // Check if we are in production mode

const BUILD_DIR = path.resolve(__dirname, 'dist')
const APP_DIR = path.resolve(__dirname, 'src')

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    main: APP_DIR + '/app.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /preact|preact-compat|react-router-dom|unistore/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: APP_DIR,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?modules=true&localIdentName=lsh[hash:base64:7]&minimize: true',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name].[ext]?[hash]'
        }
      }
    ]
  },
  devServer: {
    contentBase: APP_DIR,
    compress: true,
    historyApiFallback: true,
    stats: 'minimal',
    hot: true,
    inline: true,
    port: 8081,
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    },
    modules: [
      APP_DIR + '/shared-assets/style',
      APP_DIR + '/shared-assets/scripts',
      APP_DIR + '/shared-assets/img',
      APP_DIR + '/store',
      'node_modules'
    ]
  },
  plugins: [
    isProduction
      ? new CompressionPlugin({
          algorithm: 'gzip',
          test: /\.(js|css|json|svg|png|jpeg)$/,
          minRatio: 0.8
        })
      : new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      },
      hash: true,
      template: APP_DIR + '/index.html'
    })
  ]
}
