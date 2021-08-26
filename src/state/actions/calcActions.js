export const addAction = (input1, input2) => {
  return (dispatch) => {
    dispatch({
      type: "add",
      payload: { input1: input1, input2: input2}
    })
  }
}

export const subtractAction = (input1, input2) => {
  return (dispatch) => {
    dispatch({
      type: "subtract",
      payload: { input1: input1, input2: input2}
    })
  }
}

export const divideAction = (input1, input2) => {
  return (dispatch) => {
    dispatch({
      type: "divide",
      payload: { input1: input1, input2: input2}
    })
  }
}

export const multiplyAction = (input1, input2) => {
  return (dispatch) => {
    dispatch({
      type: "multiply",
      payload: { input1: input1, input2: input2}
    })
  }
}

export const resetAction = () => {
  return (dispatch) => {
    dispatch({
      type: "reset",
      payload: {}
    })
  }
}