export const changeThemeAction = (themeNumber) => {
  return (dispatch) => {
    dispatch({
      type: "changeTheme",
      payload: themeNumber
    })
  }
}