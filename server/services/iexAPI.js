const Axios = require('axios');

const ROOT_URL = 'https://cloud.iexapis.com/stable';
const TOKEN = process.env.IEX_TOKEN;

// MOST ACTIVE
// 'https://sandbox.iexapis.com/stable/stock/market/list/mostactive?token=Tsk_5c5e5411100849e1859ce9f8f0e52a56'

// LAST PRICE
// https://sandbox.iexapis.com/stable/tops/last?symbols=SNAP,fb,AIG%2b&token=Tsk_5c5e5411100849e1859ce9f8f0e52a56

exports.getSymbolsList = () => {
  return Axios.get(`${ROOT_URL}/ref-data/iex/symbols`, {
    params: {
      token: TOKEN,
    },
  });
};

exports.getLastPrice = stocks => {
  return Axios.get(`${ROOT_URL}/tops/last`, {
    params: {
      symbols: stocks,
      token: TOKEN,
    },
  });
};

const getStockPrice = () => {
  Axios.get(`${ROOT_URL}/stock/market/batch`, {
    params: {
      symbols: 'aapl,fb,tsla',
      token: TOKEN,
    },
  })
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.error(err);
    });
};
// '/stock/market/batch?symbols=aapl,fb,tsla&types=quote,news,chart&range=1m&last=5'

// https://cloud.iexapis.com/stable/stock/market/batch?symbols=aapl,fb,tsla&types=quote,news,chart&range=1m&last=5&token=sk_46a1f56436534dcea98f40733113c026
