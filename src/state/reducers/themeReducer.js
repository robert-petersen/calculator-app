const initialState = {
  themeNumber: 1,
  theme2: false,
  theme3: false
}

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "changeTheme":
      if (action.payload === 3) {
        state.themeNumber = 1;
        state.theme3 = false;
      } else if (action.payload === 2) {
        state.themeNumber = 3;
        state.theme2 = false;
        state.theme3 = true;
      } else {
        state.payload = 2;
        state.theme2 = true;
      }
      return state
    default:
      return state;
  }
}

export default themeReducer;