import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteRecipe } from '../actions/ShoppingActions'

const MyRecipes = (props) => {
    const dispatch = useDispatch()
    const deleteMyRecipe = () => {
        deleteRecipe(dispatch, props)
        //add deletefrom ingredients
    }
    return (
        <div>
            <Card style={{height:"25rem"}} className="m-2" id="m-2">
            <Card.Img variant="top" src={props.recipe.image} />
            <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>{props.recipe.title}</Card.Title>
            <Button variant="primary" className="m-1" onClick={deleteMyRecipe}>
                Delete from List
            </Button>
            </Card.Body>
        </Card>
        </div>
    );
}

export default MyRecipes