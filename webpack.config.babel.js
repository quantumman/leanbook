'use strict';

import webpack from "webpack";
import path from "path";

module.exports = {
  entry: {
    app: "./web/static/js/app.js",
    reader: "./web/static/js/reader.js"
  },
  output: {
    path: "./priv/static",
    filename: "js/[name].js?[hash]",
    chunkFilename: "[id].js"
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|vendor)/,
        loader: 'eslint-loader'
      }
    ],

    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_module|bower_components|vendor)/,
        loader: "babel-loader"
      },
      {
        test: /vendor\/js\/bootstrap\.js$/,
        loader: "imports-loader?jQuery=jquery"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?sourceMap"
      },
      {
        test: /\.scss$/,
        loader: "style-loadercss-loader!sass-loader?includePaths[]="
          + (path.resolve(__dirname, "./node_modules"))
      }
    ]
  },

  devtool: "sourcemap",

  plugin: [
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      "window.jQuery": "jquery",
      jquery: "jquery",
      $: "jquery",
      m: "mithril"
    })
  ]
}
