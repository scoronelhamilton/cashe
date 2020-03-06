const IEX = require('../services/iexAPI');
const { getOpeningPrice } = require('../services/alphaVantageAPI');

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
  if (typeof symbols !== 'string') {
    return res.sendStatus(404);
  }

  IEX.getLastPrice(symbols)
    .then(({ data }) => res.json(data))
    .catch(err => {
      res.sendStatus(500);
      console.error(err.message);
    });
};

exports.getOpeningPrices = (req, res) => {
  const { symbols } = req.query;
  if (typeof symbols !== 'string') return res.sendStatus(404);

  const formated = symbols.replace(/ /g, '').split(',');
  const promises = formated.map(symbol => getOpeningPrice(symbol));
  Promise.all(promises)
    .then(resp => {
      const openingPrices = {
        latestTradingDay: resp[0].data['Global Quote']['07. latest trading day'],
        prices: {},
      };
      resp.forEach(({ data: { ['Global Quote']: stock } }) => {
        const symbol = stock['01. symbol'];
        const openingPrice = stock['02. open'];
        openingPrices.prices[symbol] = openingPrice;
      });
      res.json(openingPrices);
    })
    .catch(err => {
      res.sendStatus(500);
      console.error(err.message);
    });
};
