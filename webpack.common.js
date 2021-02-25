const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    navigation: "./src/js/navigation.js",
    lozts: "./src/js/lozts.js",
    information: "./src/js/information.js",
    zarzad: "./src/js/zarzad.js",
    druzynowe: "./src/js/druzynowe.js",
    sukcesy: "./src/js/naszesukcesy.js",
    
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: {
            list: [
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "data-gallery-src",
                type: "src",
              },
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: [
              '**/*.DS_Store'
            ],
          },
        },
      ],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/navigation.html",
      inject: true,
      chunks: ["navigation"],
      filename: "navigation.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/information.html",
      inject: true,
      chunks: ["information", "navigation"],
      filename: "information.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/lozts.html",
      inject: true,
      chunks: ["lozts", "navigation"],
      filename: "lozts.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/naszesukcesy.html",
      inject: true,
      chunks: ["sukcesy", "navigation"],
      filename: "naszesukcesy.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zarzad.html",
      inject: true,
      chunks: ["zarzad", "navigation"],
      filename: "zarzad.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/2ligaM.html",
      inject: true,
      chunks: ["druzynowe", "navigation"],
      filename: "2ligaM.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/2ligaK.html",
      inject: true,
      chunks: ["druzynowe", "navigation"],
      filename: "2ligaK.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/3ligaM.html",
      inject: true,
      chunks: ["druzynowe", "navigation"],
      filename: "3ligaM.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/4ligaM.html",
      inject: true,
      chunks: ["druzynowe", "navigation"],
      filename: "4ligaM.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/3ligaK.html",
      inject: true,
      chunks: ["druzynowe", "navigation"],
      filename: "3ligaK.html",
    }),
    

  ],
};
