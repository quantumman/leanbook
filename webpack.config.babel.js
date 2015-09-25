'use strict';

import ExtractTextPlugin from "extract-text-webpack-plugin";
import path from "path";

module.exports = {
  entry: ["./web/static/css/app.css", "./web/static/js/app.js"],
  output: {
    path: "./priv/static",
    filename: "js/app.js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader?" +
                                          "includePaths[]=" +
                                           (path.resolve(__dirname, "./node_modules")))
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("css/app.css")
  ]
}
