var path = require("path");
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: "./__tests__/testapp.js",
  devtool: "eval-source-map",
  output: {
    path: path.resolve(__dirname, "__tests__"),
    filename: "testbundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "src"),path.resolve(__dirname, "__tests__")],
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"],
            plugins: [
              require("babel-plugin-transform-react-jsx"), 
              require("babel-plugin-transform-class-properties"),
              require("babel-plugin-transform-object-rest-spread")
            ]
          }
        }
      }
    ]
  },
  // plugins: [new BundleAnalyzerPlugin()],

};
