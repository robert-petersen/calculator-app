const calcReducer = (state = 0, action) => {
  switch (action.type) {
    case "add":
      state = action.payload.input1 + action.payload.input2;
      return state;
    case "subtract":
      state = action.payload.input1 - action.payload.input2;
      return state;
    case "multiply":
      state = action.payload.input1 * action.payload.input2;
      return state;
    case "divide":
      state = action.payload.input1 / action.payload.input2;
      return state;
    case "reset":
      state = 0;
      return state;
    default:
      return state;
  }
}

export default calcReducer;