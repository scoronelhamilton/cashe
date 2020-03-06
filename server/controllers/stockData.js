const iexAPI = require('../services/iexAPI');

exports.getSymbols = (req, res) => {
  iexAPI
    .getSymbolsList()
    .then(({ data }) => res.json(data))
    .catch(err => {
      res.sendStatus(500);
      console.error(err.message);
    });
};

exports.getLastPrice = (req, res) => {
  const { symbols } = req.query;
  if (typeof symbols !== 'string') {
    return res.sendStatus(404);
  }

  iexAPI
    .getLastPrice(symbols)
    .then(({ data }) => res.json(data))
    .catch(err => {
      res.sendStatus(500);
      console.error(err.message);
    });
};
