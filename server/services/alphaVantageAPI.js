const Axios = require('axios');

const ROOT_URL = 'https://www.alphavantage.co/query';
const TOKEN = process.env.ALPHA_VANTAGE_TOKEN;

exports.getOpeningPrice = symbol => {
  return Axios.get(`${ROOT_URL}`, {
    params: {
      function: 'GLOBAL_QUOTE',
      symbol: symbol,
      apikey: TOKEN,
    },
  });
};
