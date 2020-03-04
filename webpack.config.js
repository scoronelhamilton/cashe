const ENTRY_DIR = `${__dirname}/client/src/index.jsx`;
const OUTPUT_DIR = `${__dirname}/client/dist`;

module.exports = {
  entry: ENTRY_DIR,
  output: {
    path: OUTPUT_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
