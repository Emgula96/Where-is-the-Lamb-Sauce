import React from 'react'
import { Button } from 'react-bootstrap'
import { emptyGroceries } from '../actions/IngredientActions'
import { useSelector, useDispatch } from 'react-redux'

const Groceries = () => {
    const dispatch = useDispatch()
    const myGroceries =useSelector((state)=> state.ingredientsR.ingredientsList)

    return (
        <div>
            <h1>Grocery List</h1>
        <Button onClick={() => {emptyGroceries(dispatch) }}>Clear Groceries</Button>
        <ul>
        {myGroceries.map((ing, index) => {
            return (
            <li key={index}>
                    {ing.aisle} {ing.amount} {ing.unit} {ing.name}
            </li>
            );
        })}
        </ul>
        </div>
    )
    }

export default Groceries