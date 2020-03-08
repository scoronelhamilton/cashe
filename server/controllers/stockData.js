const IEX = require('../services/iexAPI');
const { getOpeningPrice } = require('../services/alphaVantageAPI');
const { formatOpeningPrices } = require('../services/helpers.js');

exports.getSymbols = (req, res) => {
  IEX.getSymbolsList()
    .then(({ data }) => res.json(data))
    .catch(err => {
      res.sendStatus(500);
      console.error(err.message);
    });
};

exports.getLastPrice = (req, res) => {
  const { symbols } = req.query;
  if (typeof symbols !== 'string' || symbols.length === 0) {
    return res.sendStatus(404);
  }

  IEX.getLastPrice(symbols)
    .then(({ data }) => res.json(data))
    .catch(err => {
      res.sendStatus(500);
      console.error(err.message);
    });
};

exports.getOpeningPrices = async (req, res) => {
  const { symbols } = req.query;
  if (!Array.isArray(symbols) || symbols.length === 0) {
    return res.sendStatus(404);
  }

  const promises = symbols.map(symbol => getOpeningPrice(symbol));
  try {
    const response = await Promise.all(promises);
    const openingPrices = formatOpeningPrices(response);
    res.json(openingPrices);
  } catch (err) {
    res.sendStatus(500);
    console.error(err);
  }
};
