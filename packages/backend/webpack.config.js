const path = require('path');

module.exports = {
  entry: './server/serverContainerGraphQL.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.cjs',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.graphql', '.gql'],
  },
};