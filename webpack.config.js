const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const { SourceMapDevToolPlugin } = require("webpack");

const paths = {
  src: path.resolve(__dirname, "./src"),
  build: path.resolve(__dirname, "./dist"),
  public: path.resolve(__dirname, "./public"),
};

const isProduction = process.env.NODE_ENV === "production";

const devPlugins = [];
const prodPlugins = [
  new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css",
  }),
];
const commonPlugins = [
  new SourceMapDevToolPlugin({
    filename: "[file].map",
  }),
  new HtmlWebpackPlugin({
    template: path.join(paths.public, "index.html"),
  }),
  new Dotenv(),
];

const plugins = isProduction ? [...commonPlugins, ...prodPlugins] : [...commonPlugins, ...devPlugins];

module.exports = {
  entry: path.join(paths.src, "index.tsx"),
  target: "web",
  mode: process.env.NODE_ENV || "development",
  output: {
    path: paths.build,
    filename: "[name].[contenthash].js",
    chunkFilename: "[id].js",
    clean: true,
  },
  plugins,
  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": paths.src,
    },
    extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
  },
  devServer: {
    port: process.env.PORT || 4001,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : "style-loader",
          { loader: "css-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
};
