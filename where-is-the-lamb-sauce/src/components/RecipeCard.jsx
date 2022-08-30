import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setRecipe } from "../actions/setRecipe";
import { useNavigate } from "react-router-dom";
const APIkey = process.env.REACT_APP_API_KEY;

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pullRecipe = async (e) => {

    const URL = `https://api.spoonacular.com/recipes/${recipe?.id}/information?apiKey=${APIkey}`;
    try {
      const response = await fetch(URL);
      const results = await response.json();
      setRecipe(dispatch, results);
      console.log(results);
      console.log(results.extendedIngredients);
      navigate("/individual-recipe");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={recipe?.image} alt="Picture not found" />
        <Card.Body>
          <Card.Title>{recipe?.title}</Card.Title>
          <Button className="m-4" variant="primary">
            Add to Shopping List
          </Button>
        </Card.Body>
        <Button variant="secondary" className="m-4" onClick={pullRecipe}>
          More Info
        </Button>
      </Card>
    </div>
  );
};

export default RecipeCard;
