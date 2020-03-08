const initialState = {
  symbols: [],
  openingPrices: {
    latestTradingDay: '',
    prices: {},
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SYMBOLS_LIST': {
      return { ...state, symbols: action.payload };
    }
    default:
      return state;
  }
};
