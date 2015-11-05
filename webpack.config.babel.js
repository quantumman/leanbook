"use strict";

import webpack from "webpack";
import path from "path";
import glob from "glob";

module.exports = {
  entry: {
    app: ["./web/static/js/app.js"],
    reader: "./web/static/js/reader.js",
    editor: "./web/static/js/editor/main.jsx"
  },
  output: {
    path: "./priv/static",
    filename: "js/[name].js?[hash]",
    chunkFilename: "[id].js"
  },

  resolve: {
    modulesDirectories: [
      "node_modules",
      "bower_components",
      "vendor/js",
      "vendor/css",
      "web/static/js",
      "web/static/css",
      "deps"
    ]
  },

  module: {
    preLoaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|vendor)/,
        loader: "eslint-loader"
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

  plugins: [
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      "window.jQuery": "jquery",
      jquery: "jquery",
      $: "jquery",
      m: "mithril"
    })
  ]
};
