const initialState = {
  isLoggedIn: false,
  userInfo: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN': {
      return { ...state };
    }
    default:
      return state;
  }
};
