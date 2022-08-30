import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MyRecipes from './MyRecipes';

const MyList = () => {

  const myRecipes = useSelector(state => state.shoppingR.shoppingList);
  const myIngredients = useSelector(state => state.ingredientsR.ingredientsList)
  const dispatch= useDispatch()



  return (
    <div>
      {Array.isArray(myRecipes)
        ? myRecipes?.map((recipe, index) => {
          return <MyRecipes key={index} recipe={recipe} />;
          })
        : "No current recipes, Add some from the search Recipes tab!"}
    </div>
  );
}

export default MyList