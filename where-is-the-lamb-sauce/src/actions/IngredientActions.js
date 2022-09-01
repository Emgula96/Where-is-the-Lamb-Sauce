export const addIngredientstoList = (dispatch, ingredientList) => {
  dispatch({ type: "ADD_TO_INGREDIENTS_LIST", payload: ingredientList });
};
export const deleteGroceries = (dispatch, myGroceries, index) => {
  const ingredient = myGroceries[index]
  dispatch({ type: "DELETE_FROM_INGREDIENTS_LIST", payload: ingredient });
};

export const emptyGroceries = (dispatch) => {
  dispatch({ type: "CLEAR_GROCERIES"});
}