const initialState = {
  symbols: [],
  openingPrices: {
    latestTradingDay: null,
    prices: {},
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SYMBOLS_LIST': {
      return { ...state, symbols: action.payload };
    }
    case 'SET_OPENING_PRICES': {
      return { ...state, openingPrices: action.payload };
    }
    default:
      return state;
  }
};
