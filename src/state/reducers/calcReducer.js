const initialState = {
  input1: "",
  input2: "",
  calcType: "",
  toggleInput: true,
}

const calcReducer = (state = initialState, action) => {
  switch (action.type) {
    case "updateInput1":
      if ( action.payload === "delete" ) {
        state.input1 = state.input1.substring(0, state.input1.length - 1);
      } else {
        state.input1 = state.input1 + action.payload;
      }
      return ({
        ...state,
        input1: state.input1,
      });
    case "updateInput2":
      if ( action.payload === "delete" ) {
        state.input2 = state.input2.substring(0, state.input2.length - 1);
      } else {
        state.input2 = state.input2 + action.payload;
      }
      return ({
        ...state,
        input2: state.input2,
      });
    case "updateCalcType":
      return ({
        ...state,
        calcType: action.payload,
      });
    case "updateToggleInput":
      return ({
        ...state,
        toggleInput: !state.toggleInput,
      });
    case "add":
      let addResults = action.payload.input1 + action.payload.input2;
      state.input1 = addResults.toString();
      return ({
        input1: state.input1,
        input2: "",
        calcType: "",
        toggleInput: true,
      });
    case "subtract":
      let subResults = action.payload.input1 - action.payload.input2;
      state.input1 = subResults.toString();
      return ({
        input1: state.input1,
        input2: "",
        calcType: "",
        toggleInput: true,
      });
    case "multiply":
      let mulResults = action.payload.input1 * action.payload.input2;
      state.input1 = mulResults.toString();
      return ({
        input1: state.input1,
        input2: "",
        calcType: "",
        toggleInput: true,
      });
    case "divide":
      let divResults = action.payload.input1 / action.payload.input2;
      state.input1 = divResults.toString();
      return ({
        input1: state.input1,
        input2: "",
        calcType: "",
        toggleInput: true,
      });
    case "reset":
      return ({
        input1: "",
        input2: "",
        calcType: "",
        toggleInput: true,
      });
    default:
      return state;
  }
}

export default calcReducer;