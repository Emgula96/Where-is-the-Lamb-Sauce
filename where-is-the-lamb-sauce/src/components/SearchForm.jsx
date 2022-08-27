import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import SearchResults from "./SearchResults";

const APIkey = "9b73240ca67d420c8370f0b057d81bc6";

function SearchForm() {
  const [cuisine, setCuisine] = useState("");
  const [type, setType] = useState("");
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIkey}&cuisine=${cuisine}&type=${type}&number=50&query=${keyword}`);
    const data = await res.json();
    dispatch({ type: "SET_SEARCH_RESULTS", payload: data.results });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="cuisine">
          <Form.Label>Choose Cuisine</Form.Label>
          <Form.Select
            size="sm"
            value={cuisine}
            onChange={(e) => {
              setCuisine(e.target.value);
            }}>
            <option value="">Any</option>
            <option value="african">African</option>
            <option value="american">American</option>
            <option>British</option>
            <option>Cajun</option>
            <option>Carribean</option>
            <option>Chinese</option>
            <option>Eastern European</option>
            <option>European</option>
            <option>French</option>
            <option>German</option>
            <option>Greek</option>
            <option>Indian</option>
            <option>Irish</option>
            <option>Italian</option>
            <option>Japanese</option>
            <option>Jewish</option>
            <option>Korean</option>
            <option>Latin American</option>
            <option>Mediterranean</option>
            <option>Mexican</option>
            <option>Middle Eastern</option>
            <option>Nordic</option>
            <option>Southern</option>
            <option>Spanish</option>
            <option>Thai</option>
            <option>Vietnamese</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="type">
          <Form.Label>Type/Course</Form.Label>
          <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Any</option>
            <option value="main course">Main Course</option>
            <option>Side Dish</option>
            <option>Dessert</option>
            <option>Appetizer</option>
            <option>Salad</option>
            <option>Bread</option>
            <option>Breakfast</option>
            <option>Soup</option>
            <option>Beverage</option>
            <option>Sauce</option>
            <option>Marinade</option>
            <option>Fingerfood</option>
            <option>Snack</option>
            <option>Drink</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="keywords">
          <Form.Label>KeyWord</Form.Label>
          <Form.Control value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SearchForm;
