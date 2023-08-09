const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;
const { EnvironmentPlugin } = require("webpack");

module.exports = (env) => ({
  name: "shell",
  mode: "development",
  cache: true,
  target: "web",
  context: path.join(__dirname, "./"),
  entry: "./src/index.js",
  devServer: {
    static: { directory: path.join(__dirname, "public") },
    historyApiFallback: true,
    webSocketServer: false,
    compress: true,
    port: 3000,
    host: "0.0.0.0",
    allowedHosts: "all",
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
    },
  },
  devtool: process.env.NODE_ENV === "development" ? "inline-source-map" : "eval-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        // exclude: /node_modules\/(?!@sayfelanjos).*/,
        exclude: /node_modules/,
        test: /\.jsx?$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        exclude: /node_modules/,
        test: /\.(scss|sass|css)$/i,
        use: [
          // Creates `style` nodes from JS strings
          { loader: "style-loader" },
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                auto: true,
                localIdentName: "[local]--[hash:base64:5]",
                localIdentContext: path.resolve(__dirname, "src"),
              },
            },
          },
          // Compiles Sass to CSS
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset",
      },
    ],
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.sharpMinify,
          options: {
            encodeOptions: {
              jpeg: {
                // https://sharp.pixelplumbing.com/api-output#jpeg
                quality: 100,
              },
              webp: {
                // https://sharp.pixelplumbing.com/api-output#webp
                lossless: true,
              },
              avif: {
                // https://sharp.pixelplumbing.com/api-output#avif
                lossless: true,
              },

              // png by default sets the quality to 100%, which is same as lossless
              // https://sharp.pixelplumbing.com/api-output#png
              png: {},

              // gif does not support lossless compression at all
              // https://sharp.pixelplumbing.com/api-output#gif
              gif: {},
            },
          },
        },
      }),
    ],
  },

  resolve: {
    extensions: [".ts", ".js", ".jsx", ".tsx", ".css", ".scss"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      filename: "remoteEntry.js",
      remotes: {
        globalStore: `globalStore@http://global-store.info/remoteEntry.js`,
        orders: `orders@http://orders-mf.info/remoteEntry.js`,
        invoices: `invoices@http://invoices-mf.info/remoteEntry.js`,
        supplies: `supplies@http://supplies-mf.info/remoteEntry.js`,
        statistics: `statistics@http://statistics-mf.info/remoteEntry.js`,
        customers_and_suppliers: `customers_and_suppliers@http://customers-and-suppliers-mf.info/remoteEntry.js`,
        users: `users@http://users-mf.info/remoteEntry.js`,
        contracts: `contracts@http://contracts-mf.info/remoteEntry.js`,
      },
      shared: {
        ...deps,
        react: {
          eager: true,
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["main"],
    }),
    new EnvironmentPlugin({
      NODE_ENV: "development", // use 'development' unless process.env.NODE_ENV is defined
      REACT_APP_BASEURL: "localhost",
      REACT_APP_PORT: "4007",
    }),
  ],
});
