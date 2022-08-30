export const addIngredientstoList = (dispatch, ingredientList) => {
  dispatch({ type: "ADD_TO_INGREDIENTS_LIST", payload: ingredientList });
};
