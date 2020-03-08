const initialState = {
  symbols: [],
  currentPrices: {
    symbol: '',
    price: 0,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SYMBOLS_LIST': {
      return { ...state, symbols: action.payload };
    }
    case 'SET_CURRENT_PRICES': {
      console.log(action.payload);
      return { ...state, currentPrices: action.payload };
    }
    default:
      return state;
  }
};
