export const addToShopping = (dispatch, thisRecipe) => {
  dispatch({ type: "ADD_RECIPE", payload:thisRecipe});
};

export const deleteRecipe = (dispatch,recipe) => {
  dispatch({ type: "DELETE_RECIPE", payload:recipe});
};