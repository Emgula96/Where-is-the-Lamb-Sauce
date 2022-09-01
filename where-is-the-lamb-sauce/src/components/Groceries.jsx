import React from "react";
import { Button } from "react-bootstrap";
import { deleteGroceries, emptyGroceries } from "../actions/IngredientActions";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../css/groceries.css";

const Groceries = () => {
  const dispatch = useDispatch();
  const myGroceries = useSelector((state) => state.ingredientsR.ingredientsList);

  const removeGrocery = (index) => {
    deleteGroceries(dispatch, myGroceries, index);
    };
    (myGroceries.sort((a, b) => {
    if (a.aisle < b.aisle) {
      return -1;
    }
    if (a.aisle > b.aisle) {
      return 1;
    }
    return 0;
    }))
  return (
    <div>
      <h1 id="groceryTitle">Grocery List</h1>
      <Button
        id="clear-btn"
        onClick={() => {
        emptyGroceries(dispatch);
        }}>
        Clear Groceries
        </Button>
        <div>
        <ul className="groceriesList">
            {myGroceries
            .sort((a, b) => a.aisle - b.aisle)
            .map((ing, index) => {
                return (
                <li key={index} className="indvGrocery">
                    <Button className="removeGroc" variant="secondary" onClick={() => removeGrocery(index)}>
                    <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                    </Button>
                    <p className="groceryItem">
                    {ing?.aisle} {ing?.amount} {ing?.unit} {ing?.name}
                    </p>
                </li>
                );
            })}
        </ul>
        </div>
    </div>
  );
};

export default Groceries;
