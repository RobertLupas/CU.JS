const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  entry: ["./src/darkmode.js", "./src/scroll-to-top.js"],
  mode: 'none',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "common-utilities-bundle.js",
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  }
};