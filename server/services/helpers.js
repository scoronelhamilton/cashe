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
