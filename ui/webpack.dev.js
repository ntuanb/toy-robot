const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  entry: './ui/index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'dist.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 9000
  }
};