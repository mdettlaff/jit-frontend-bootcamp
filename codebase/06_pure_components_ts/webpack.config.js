﻿const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const SRC_PATH = path.resolve(__dirname, "./src")
const DIST_PATH = path.resolve(__dirname, "./dist")

module.exports = {
  entry: path.join(SRC_PATH, "index.ts"),
  /* Destination of "packed" JS bundle */
  output: {
    path: DIST_PATH,
    filename: "app.bundle.js",
  },
  devtool: "source-map",
  /* Configure webpack-dev-server */
  devServer: {
    port: 5555,
    open: true,
  },
  plugins: [
    /* Injects JS bundle into desired HTML file */
    new HtmlWebpackPlugin({
      template: path.join(SRC_PATH, "index.html"),
    }),
  ],
  /* Apply babel-loader on all files with .js and .jsx extensions */
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          "ts-loader",
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
    ],
  },
  /* Enable importing files without specifying the extensions */
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    modules: [SRC_PATH, "node_modules"]
  },
}
