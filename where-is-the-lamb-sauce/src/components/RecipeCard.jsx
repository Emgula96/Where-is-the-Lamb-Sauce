import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setRecipe } from "../actions/setRecipe";
const APIkey = process.env.REACT_APP_API_KEY;

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();
  const indvRecipe = useSelector((state) => state.recipeR.individualRecipe);

  const visitRecipe = async (e) => {
    // e.preventDefault();

    const URL = `https://api.spoonacular.com/recipes/${recipe?.id}/information?apiKey=${APIkey}`;
    try {
      const response = await fetch(URL);
      const results = await response.json();
      setRecipe(dispatch, results);
      console.log(results);
      console.log(results.extendedIngredients);
      console.log(indvRecipe);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={recipe?.image} alt="Picture not found" />
        <Card.Body >
          <Card.Title>{recipe?.title}</Card.Title>
      <Button className="m-4" variant="primary">
        Add to Shopping List
      </Button>
        </Card.Body>
      <Link to="/individual-recipe">
        <Button variant="secondary" className="m-1" onClick={visitRecipe}>
          More Info
          </Button>
      </Link>
      </Card>
    </div>
  );
};

export default RecipeCard;
