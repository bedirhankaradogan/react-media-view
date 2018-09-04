var path = require("path");
 
module.exports = {
  mode: "production",
  entry: "./src/ReactMediaView.jsx",
  output: {
    path: path.resolve("dist"),
    filename: "ReactMediaView.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      },
      {
        test: /\.scss?$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
}
