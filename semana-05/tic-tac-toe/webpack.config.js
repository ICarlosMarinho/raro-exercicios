const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { resolve, join } = require("path");

module.exports = {
  entry: resolve(__dirname, "src", "index.tsx"),
  output: {
    path: join(__dirname, "build"),
    filename: "bundle.js"
  },
  devtool: "inline-source-map",
  devServer: {
    open: {
      app: {
        name: "google-chrome"
      }
    },
    host: process.env.HOST || "localhost",
    port: process.env.PORT || "3000",
    historyApiFallback: true,
    client: {
      overlay: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(tsx?)$/i,
        use: ["ts-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(svg|png)$/i,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  }
};
