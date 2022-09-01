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
        ingredientsList: state.ingredientsList.filter((groc) => {
          return groc.uuid !== action.payload.uuid;
        }),
      };
    case "CLEAR_GROCERIES":
      return {
        ingredientsList:[]
      }
    default:
      return state;
  }
};
export default ingredientsReducer;
