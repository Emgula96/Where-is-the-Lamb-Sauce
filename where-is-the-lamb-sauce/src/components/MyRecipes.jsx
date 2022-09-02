import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteRecipe } from '../actions/myRecipeActions'
import { useNavigate } from 'react-router'
import "../css/myList.css"

const MyRecipes = (props) => {
    const navigate= useNavigate()
    const dispatch = useDispatch()
    const deleteMyRecipe = () => {
        deleteRecipe(dispatch, props)
        //add deletefrom ingredients
    }

    const goToRecipe = () => {
  navigate("/individual-recipe");}
    return (
        <div className='myRecipeCardContainer'>
            <Card style={{ width: "100%", height: "100%" }}>
            <Card.Img variant="top" src={props.recipe.image} />
            <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>{props.recipe.title}</Card.Title>
            <Button variant="primary" className="m-1" size="sm" onClick={deleteMyRecipe}>
                        Delete from List
            </Button>
            <Button variant="secondary" className="m-1" onClick={goToRecipe}>
                Go to Reicpe
            </Button>
            </Card.Body>
        </Card>
        </div>
    );
}

export default MyRecipes