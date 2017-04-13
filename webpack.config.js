const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    main: './main.js',
    css: './css/app.less'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash].bundle.js'
  },
  devtool: "source-map",

  devServer: {
    // contentBase: path.resolve(__dirname, './src'),  // New
    clientLogLevel: 'info',
    watchContentBase: true,
    watchOptions: {
      poll: true
    }
  },
  module:{
    rules: [
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'url-loader?limit=10000&name=fonts/[name].[ext]'
      },
      {
        test: /\.png$/,
        loader: "url-loader?name=images/[name].[ext]"
        //loader: "file-loader?name=images/[name].[ext]"
      }

    ]
  },
  plugins: [
     new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: function (module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    }),
    new ExtractTextPlugin({
      filename: '[name].[hash].css'
      // use: 'css-loader'
    }),
    new HtmlWebpackPlugin({template: '../index.html'})
  ],
  resolve: {
    alias:{
      'vue': '../node_modules/vue/dist/vue.js'
    }
  }

};