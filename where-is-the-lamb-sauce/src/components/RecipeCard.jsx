import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const APIkey = process.env.REACT_APP_API_KEY;

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch()
  const indvRecipe = useSelector((state) => state.recipeR.individualRecipe);


  const visitRecipe = async (e) => {
    e.preventDefault();
    // console.log("let's go see this recipe")
    // console.log(props.recipe.id)
    const URL = `https://api.spoonacular.com/recipes/${recipe?.id}/information?apiKey=${APIkey}`;
    try {
      const response = await fetch(URL);
      const results = await response.json();
      dispatch({ type: "SET_INDV_RECIPE", payload: results});
      console.log(results)
      console.log(results.extendedIngredients)
      console.log(indvRecipe)
    } catch (error) {
      console.log("didn't work!");
      console.log(error);
    }
  };

  return (
    <div>
      <p>{recipe?.title}</p>
      <img src={recipe?.image} />
      <Button className="m-4" variant="primary">
        Add to Shopping List
      </Button>
      <Button variant="secondary" className="m-1" onClick={visitRecipe}>
        More Info
      </Button>
    </div>
  );
};

export default RecipeCard;
