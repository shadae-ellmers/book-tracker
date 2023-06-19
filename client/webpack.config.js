const { join } = require('path')

const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: join(__dirname, 'index.tsx'),
  output: {
    path: join(__dirname, '../server/public'),
    filename: 'bundle.js',
  },
  mode: 'development',
  plugins: [
    new Dotenv({
      path: join(__dirname, '../.env'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'source-map',
}
