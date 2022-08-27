import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import shoppingReducer from "./shoppingReducer";
import recipeReducer from "./recipeReducer";
import ingredientsReducer from "./ingredientsReducer";

const persistConfig = {
  key: "persist",
  storage,
};

const rootReducer = combineReducers({
  searchR: searchReducer,
  shoppingR: shoppingReducer,
  recipeR: recipeReducer,
  ingredientsR: ingredientsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
