const Axios = require('axios');

const ROOT_URL = 'https://cloud.iexapis.com/stable';
const TOKEN = process.env.IEX_TOKEN;

exports.getSymbolsList = () => {
  return Axios.get(`${ROOT_URL}/ref-data/iex/symbols`, {
    params: {
      token: TOKEN,
    },
  });
};

exports.getLastPrice = symbols => {
  return Axios.get(`${ROOT_URL}/tops/last`, {
    params: {
      symbols: symbols,
      token: TOKEN,
    },
  });
};

exports.getHotStocks = () => {
  return Axios.get(`${ROOT_URL}/stock/market/list/mostactive`, {
    params: {
      token: TOKEN,
    },
  });
};
