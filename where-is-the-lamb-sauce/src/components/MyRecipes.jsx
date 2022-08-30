import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteRecipe } from '../actions/ShoppingActions'

const MyRecipes = (props) => {
    const dispatch = useDispatch()
    const deleteRecipe = () => {
        deleteRecipe((dispatch, props.recipe))
        //add deletefrom ingredients
    }
    return (
      <div>
        <Card style={{ width: "10rem" }} className="m-2">
          <Card.Img variant="top" src={props.recipe.image} />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>{props.recipe.title}</Card.Title>
            {/* <Card.Subtitle>{props.recipe.price}</Card.Subtitle>
            <Card.Text>{props.recipe.description}</Card.Text> */}
            <Button variant="primary" className="m-1" onClick={deleteRecipe}>
              Delete from List
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
}

export default MyRecipes