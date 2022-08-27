const initialState = {
    individualRecipe: {},
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INDV_RECIPE":
          return {
            ...state,
            individualRecipe: action.payload,
          };
    default:
      return state;
  }
};

export default recipeReducer;