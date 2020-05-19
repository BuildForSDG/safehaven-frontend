const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  node: {
    fs: "empty"
  }, 
  module: {

    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(jpg|png|svg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        loader: 'file-loader'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 8082,
    open: true,
    historyApiFallback: true,
    hot: true
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devtool: 'eval-source-map'
};
