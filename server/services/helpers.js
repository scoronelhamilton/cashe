exports.formatUserInfo = user => {
  /*
  Input: mongoose document {..., portfolio {AAPL: 2}}
  Output: object of objects {..., portfolio: {AAPL: {symbol: AAPL, amount: 2}}}
  */

  const userJSON = user.toJSON();
  const { portfolio } = userJSON;
  const sortedKeys = Object.keys(portfolio).sort();
  const newPortfolio = {};

  for (let key of sortedKeys) {
    newPortfolio[key] = { symbol: key, amount: portfolio[key] };
  }

  delete userJSON.portfolio;
  return {
    userInfo: { ...userJSON },
    portfolio: newPortfolio,
  };
};

exports.formatOpeningPrices = response => {
  const openingPrices = {
    latestTradingDay: null,
    prices: {},
  };

  response.forEach(({ data: { ['Global Quote']: stock } }) => {
    const symbol = stock ? stock['01. symbol'] : '';
    const openingPrice = stock ? stock['02. open'] : 0;
    openingPrices.prices[symbol] = parseInt(openingPrice);

    if (!openingPrices.latestTradingDay && stock && stock['07. latest trading day']) {
      openingPrices.latestTradingDay = stock['07. latest trading day'];
    }
  });

  return openingPrices;
};
