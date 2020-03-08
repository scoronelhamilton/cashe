const path = require('path');

const ENTRY_FILE = path.resolve(__dirname, 'client/src/index.jsx');
const OUTPUT_DIR = path.resolve(__dirname, 'client/dist');

module.exports = {
  entry: ENTRY_FILE,
  output: {
    path: OUTPUT_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
};
