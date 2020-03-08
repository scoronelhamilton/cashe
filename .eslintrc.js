module.exports = {
  extends: ['prettier'],
  plugins: ['prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': ['error'],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    es6: true,
  },
};
