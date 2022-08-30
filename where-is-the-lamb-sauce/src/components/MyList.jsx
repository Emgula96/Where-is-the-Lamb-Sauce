import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Groceries from './Groceries';
import MyRecipes from './MyRecipes';

const MyList = () => {

  const myRecipes = useSelector(state => state.shoppingR.shoppingList);
  const myIngredients = useSelector(state => state.ingredientsR.ingredientsList)
  const dispatch= useDispatch()



  return (
    <div>
      {myRecipes.length > 0
        ? myRecipes?.map((recipe, index) => {
          return <MyRecipes key={index} recipe={recipe} />;
        })
        : "No current recipes. Add some from the Search Recipes tab!"}
        <Groceries/>
      </div>
  );
}

export default MyList