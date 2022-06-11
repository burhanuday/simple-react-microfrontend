const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'remote_bundle.js',
    publicPath: 'http://localhost:3001/',
    library: 'RemoteComponent',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    hot: true,
    port: 3001,
    allowedHosts: 'all',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods':
        'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};
