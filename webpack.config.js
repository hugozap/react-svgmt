const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: "babel-loader"
          // Note: We're removing the options here since they'll be in babel.config.js
        }
      }
    ]
  },
  // Uncomment if you want to analyze the bundle
  // plugins: [new BundleAnalyzerPlugin()],
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      umd: "react",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      umd: "react-dom",
      root: "ReactDOM"
    },
    "prop-types": {
      commonjs: "prop-types",
      commonjs2: "prop-types",
      amd: "prop-types",
      umd: "prop-types",
      root: "PropTypes"
    }
  }
};