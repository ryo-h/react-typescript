var webpack = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/public"
  },

  // デバッグ用にソースマップの出力を有効にします。
  devtool: "source-map",

  resolve: {
    // 解決可能な拡張子として、'.ts' と '.tsx' を追加します。
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // },

  module: {
    rules: [
      // 拡張子が .ts と .tsx　のファイル を 'awesome-typescript-loader' で
      // 扱うようにします。
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // 出力されるすべての .js ファイルは、'source-map-loader' で
      // 再加工されたソースマップを持ちます。
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ]
  },
  // alias: {
  //   'react-virtualized/List': 'react-virtualized/dist/es/List',
  // },
};