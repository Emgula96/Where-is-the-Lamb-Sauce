const initialState = {
    shoppingList:[],
}

const shoppingReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_RECIPE":
        return {
          ...state,
          shoppingList: state.shoppingList.concat(action.payload),
        };
      case "DELETE_RECIPE":
        return {
          ...state,
          shoppingList: state.shoppingList.filter((i) => {
            return i.id !== action.payload.id;
          }),
        };
      default:
        return state;
    }
}
export default shoppingReducer;