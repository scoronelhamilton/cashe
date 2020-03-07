const initialState = {
  isLoggedIn: false,
  userInfo: {
    portfolio: {},
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOGGED_IN': {
      return { ...state, isLoggedIn: action.payload };
    }
    case 'SET_USER_INFO': {
      return { ...state, userInfo: action.payload };
    }
    case 'ADD_STOCK': {
      const { symbol, amount, netValue } = action.payload;
      const { cash, portfolio } = state.userInfo;

      let currentStockAmount = portfolio[symbol];
      if (!currentStockAmount) {
        currentStockAmount = amount;
      } else {
        currentStockAmount += amount;
      }

      const newPortfolio = { ...portfolio, [symbol]: currentStockAmount };
      const newCash = cash - netValue;
      const newUserInfo = { ...state.userInfo, cash: newCash, portfolio: newPortfolio };

      return { ...state, userInfo: newUserInfo };
    }
    default:
      return state;
  }
};
