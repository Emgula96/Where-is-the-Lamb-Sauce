import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <p>{recipe?.title}</p>
      <img src={recipe?.image} />
    </div>
  );
};

export default RecipeCard;
