const path = require('path');

const ENTRY_FILE = path.join(__dirname, 'client/src/index.jsx');
const OUTPUT_DIR = path.join(__dirname, 'client/dist');

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
