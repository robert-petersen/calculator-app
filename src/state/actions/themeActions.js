export const changeTheme = (themeNumber) => {
  return (dispatch) => {
    dispatch({
      type: "changeTheme",
      payload: themeNumber
    })
  }
}