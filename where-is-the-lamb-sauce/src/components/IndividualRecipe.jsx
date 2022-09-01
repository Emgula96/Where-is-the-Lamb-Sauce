import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIngredientstoList } from "../actions/IngredientActions";
import removeTags from "../actions/removeHTML";
import { Button } from "react-bootstrap";
import { addToMyRecipe } from "../actions/myRecipeActions";
import uuid from "react-uuid";
import "../css/SingleRecipe.css"

const IndividualRecipe = () => {
  const thisRecipe = useSelector((state) => state.recipeR.individualRecipe);
  let ingredientList = useSelector((state) => state.ingredientsR.ingredientsList);
  const dispatch = useDispatch();
  const instructions = thisRecipe.analyzedInstructions[0]?.steps;

  const setingredientList = (thisRecipe) => {
    for (let i of thisRecipe.extendedIngredients) {
      ingredientList.push({
        aisle: i.aisle,
        amount: i.amount,
        unit: i.unit,
        name: i.name,
        id: thisRecipe.id,
        uuid: uuid(),
      });
      addIngredientstoList(dispatch, ingredientList);
    }
  };

  const handleClick = () => {
    setingredientList(thisRecipe);
      addToMyRecipe(dispatch, thisRecipe);
  }


  return (
    <div id="indv-Recipe-Container">
      <div className="container-top">
          <h1>{thisRecipe.title} </h1>
          <h2>Cook time: {thisRecipe.readyInMinutes} minutes</h2>
          <img id="indv-picture" src={thisRecipe.image} alt="" />
          <p className="summary">{removeTags(thisRecipe.summary)}</p>
        <Button className="add-recipe-btn"
          onClick={() => {
            handleClick();
          }}>
          Add to My Recipes
        </Button>
      </div>
      <div className="container-bottom">
        <ul>
          {thisRecipe.extendedIngredients?.map((ing, index) => {
            return (
              <li key={index}>
                {ing.amount} {ing.unit} {ing.name}
              </li>
            );
          })}
        </ul>
        <h3>INSTRUCTIONS</h3>
        <ol>
          {Array.isArray(instructions)
            ? instructions?.map((step, index) => {
                return <li key={index}>{step.step}</li>;
              })
            : "No instructions found. Good luck!"}
        </ol>
      </div>
    </div>
  );
};

export default IndividualRecipe;
