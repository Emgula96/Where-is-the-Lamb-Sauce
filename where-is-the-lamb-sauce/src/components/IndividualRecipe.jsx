import React from 'react'
import { useSelector } from 'react-redux'

const IndividualRecipe = () => {
  const thisRecipe = useSelector((state)=>state.recipeR.individualRecipe)
  return (
    <div>
      <h1>{thisRecipe.title} </h1>
      <h2>Cook time: {thisRecipe.readyInMinutes} minutes</h2>
      <img src={thisRecipe.image} />
      <p>{thisRecipe.summary}</p>
    </div>
  );
}

export default IndividualRecipe