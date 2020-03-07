const initialState = {
  isLoggedIn: false,
  userInfo: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOGGED_IN': {
      return { ...state, isLoggedIn: action.payload };
    }
    case 'SET_USER_INFO': {
      return { ...state, userInfo: action.payload };
    }
    default:
      return state;
  }
};
