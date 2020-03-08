const initialState = {
  isLoggedIn: false,
  userInfo: {},
  portfolio: {},
  portfolioValue: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOGGED_IN': {
      return { ...state, isLoggedIn: action.payload };
    }
    case 'SET_USER_INFO': {
      const { userInfo, portfolio } = action.payload;
      return { ...state, userInfo, portfolio };
    }
    case 'SET_CURRENT_PRICES': {
      const stocks = action.payload;
      const { portfolio } = state;

      let newPortfolioValue = 0;
      const newPortfolio = {};
      for (let stock of stocks) {
        const { symbol, price } = stock;
        newPortfolio[symbol] = { ...portfolio[symbol], currentPrice: price };
        newPortfolioValue += price * portfolio[symbol].amount;
      }

      return { ...state, portfolio: newPortfolio, portfolioValue: newPortfolioValue };
    }
    case 'ADD_STOCK': {
      const { symbol, amount, netValue } = action.payload;
      const { userInfo, portfolio } = state;
      const { cash } = userInfo;

      let currentStockAmount = portfolio[symbol];
      if (!currentStockAmount) {
        currentStockAmount = amount;
      } else {
        currentStockAmount += amount;
      }

      const newPortfolio = { ...portfolio, [symbol]: currentStockAmount };
      const newCash = cash - netValue;
      const newUserInfo = { ...userInfo, cash: newCash };

      return { ...state, userInfo: newUserInfo, portfolio: newPortfolio };
    }
    default:
      return state;
  }
};
