const initialState = {
  ingredientsList: [],
};

const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_INGREDIENTS_LIST":
      return {
        ...state,
        ingredientsList: action.payload,
      };
    case "DELETE_FROM_INGREDIENTS_LIST":
      return {
        ...state,
        ingredientsList: state.ingredientsList.filter((n) => {
          return n.id !== action.recipe.id;
        }),
      };
    default:
      return state;
  }
};
export default ingredientsReducer;
