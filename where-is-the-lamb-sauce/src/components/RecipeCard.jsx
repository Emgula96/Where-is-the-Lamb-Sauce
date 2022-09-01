import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setRecipe } from "../actions/setRecipe";
import { useNavigate } from "react-router-dom";
import { addToMyRecipe} from "../actions/myRecipeActions";
import { addIngredientstoList } from "../actions/IngredientActions";
import uuid from "react-uuid";
const APIkey = process.env.REACT_APP_API_KEY;

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ingredientList = useSelector((state) => state.ingredientsR.ingredientsList);
  const pullRecipe = async (e) => {
    const URL = `https://api.spoonacular.com/recipes/${recipe?.id}/information?apiKey=${APIkey}`;
    try {
      const response = await fetch(URL);
      const results = await response.json();
      setRecipe(dispatch, results);
      navigate("/individual-recipe");
    } catch (error) {
      console.log(error);
      navigate("*")
    }
  };

  const addAllToShopping = async (e) => {
    const URL = `https://api.spoonacular.com/recipes/${recipe?.id}/information?apiKey=${APIkey}`;
    try {
      const response = await fetch(URL);
      const results = await response.json();
      // console.log(results)
      addToMyRecipe(dispatch, results)
          for (let i of results.extendedIngredients) {
            ingredientList.push({
              aisle: i.aisle,
              amount: i.amount,
              unit: i.unit,
              name: i.name,
              id: recipe.id,
              uuid: uuid()
            });
            addIngredientstoList(dispatch, ingredientList);
          }
    } catch (error) {
      console.log(error);
      navigate("*")
    }
  };




  return (
    <div className="card" id='card'>
      <Card style={{ width: "100%", height: "100%" }}>
        <Card.Img variant="top" src={recipe?.image} alt="Picture not found" />
        <Card.Body>
          <Card.Title>{recipe?.title}</Card.Title>
          <Button id="btn" className="m-4" variant="primary" onClick={addAllToShopping}>
            Add to My Recipes
          </Button>
        <Button id="btn" variant="secondary" className="m-4" onClick={pullRecipe}>
          More Info
            </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecipeCard;
