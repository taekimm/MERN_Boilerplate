const path = require("path");
const webpack = require("webpack");

const BUILD_DIR = path.resolve(__dirname, "./public");
const APP_DIR = path.resolve(__dirname, "./src/client");

const config = {
  context: __dirname,
  mode: "development",
  devtool: "cheap-eval-source-map",
  entry: {
    main: APP_DIR + "/ClientApp.jsx"
  },
  output: {
    filename: "bundle.js",
    path: BUILD_DIR
  },
  resolve: {
    extensions: [".js", ".jsx", "json"]
  },
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        include: __dirname,
        query: {
          presets: ["es2015", "react", "react-hmre"]
        }
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hot: true,
    contentBase: "./public",
    publicPath: "/",
    port: 8080,
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
};

module.exports = config;
