const webpack = require('webpack');
module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.REACT_APP_FIREBASE_API_KEY': JSON.stringify(
        'AIzaSyD9sFO267ezcwsjm-pgiNje4gz_TAEYH2o'
      ),
      'process.env.REACT_APP_FIREBASE_AUTH_DOMAIN': JSON.stringify(
        'dev-easy-go-list.firebaseapp.com'
      ),
      'process.env.REACT_APP_FIREBASE_PROJECT_ID':
        JSON.stringify('dev-easy-go-list'),
      'process.env.REACT_APP_FIREBASE_STORAGE_BUCKET': JSON.stringify(
        'dev-easy-go-list.appspot.com'
      ),
      'process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID':
        JSON.stringify('116950216902'),
      'process.env.REACT_APP_FIREBASE_APP_ID': JSON.stringify(
        '1:116950216902:web:8fe74c38a6aeb35b9127c'
      ),
    }),
  ],
  entry: ['./client/index.js'],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
};
