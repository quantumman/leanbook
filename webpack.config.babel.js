'use strict';

import ExtractTextPlugin from "extract-text-webpack-plugin";
import path from "path";

module.exports = {
  entry: {
    app: "./web/static/js/app.js"
  },
  output: {
    path: "./priv/static",
    filename: "js/app.js"
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader'
      }
    ],

    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          "style-loader",
          "css-loader?sourceMap",
          {
            publicPath: "./priv/static/css"
          }
        )
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          "style-loader",
          "css-loader!sass-loader?includePaths[]="
            + (path.resolve(__dirname, "./node_modules"))
        )
      }
    ]
  },

  devtool: "sourcemap",

  plugins: [
    new ExtractTextPlugin(
      "css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]", {
        disable: false,
        allChunks: true
      }
    )
  ]
}
