const path = require('path')

module.exports = {
  mode: 'development',
  entry: './app/assets/scripts/App.js',
  output: {
      path: path.resolve(__dirname, 'app/temp/scripts'),
      filename: 'App.js'
  },
  module: {
    rules: [
      {
        loader: 'babel',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
