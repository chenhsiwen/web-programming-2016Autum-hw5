const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,               // type of file to transform
      loaders: ['babel-loader'],   // what loaders to use
      exclude: /node_modules/,      // don't transform these files
    }, {
      test: /\.css$/,
      loaders: [
        'style-loader',
        'css-loader',
      ],
      exclude: /node_modules/,
    }]
  }
}    