export const addIngredientstoList = (dispatch, ingredientList) => {
  dispatch({ type: "ADD_TO_INGREDIENTS_LIST", payload: ingredientList });
};

export const emptyGroceries = (dispatch) => {
  dispatch({ type: "CLEAR_GROCERIES"});
}