module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: './public'
  },
  module: {
    loaders: [{
      test: /.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }]
  }
}
