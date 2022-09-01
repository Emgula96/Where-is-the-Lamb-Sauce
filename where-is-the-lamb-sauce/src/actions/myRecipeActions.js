export const addToMyRecipe = (dispatch, thisRecipe) => {
  dispatch({ type: "ADD_RECIPE", payload:thisRecipe});
};

export const deleteRecipe = (dispatch, props) => {
  console.log(props)
  dispatch({ type: "DELETE_RECIPE", payload:props.recipe});
};