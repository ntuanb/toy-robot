const path = require('path');

module.exports = {
  mode: 'production',
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
  }
};