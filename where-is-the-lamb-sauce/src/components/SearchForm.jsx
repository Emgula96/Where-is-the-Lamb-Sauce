import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch } from "react-redux";
import { useState,} from "react";
import { clearSearch, setSearch } from "../actions/searchActions";

const APIkey = process.env.REACT_APP_API_KEY;

function SearchForm() {
  const [cuisine, setCuisine] = useState("");
  const [type, setType] = useState("");
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIkey}&cuisine=${cuisine}&type=${type}&number=50&query=${keyword}`);
    const data = await res.json();
    setSearch(dispatch, data);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="cuisine">
          <Form.Label>Choose Cuisine</Form.Label>
          <Form.Select
            value={cuisine}
            onChange={(e) => {
              setCuisine(e.target.value);
            }}>
            <option value="">Any</option>
            <option value="african">African</option>
            <option value="american">American</option>
            <option value="british">British</option>
            <option value="cajun">Cajun</option>
            <option value="carribean">Carribean</option>
            <option value="chinese">Chinese</option>
            <option value="eastern european">Eastern European</option>
            <option value="european">European</option>
            <option value="french">French</option>
            <option value="german">German</option>
            <option value="greek">Greek</option>
            <option value="indian">Indian</option>
            <option value="irish">Irish</option>
            <option value="italian">Italian</option>
            <option value="japanese">Japanese</option>
            <option value="jewish">Jewish</option>
            <option value="korean">Korean</option>
            <option value="latin american">Latin American</option>
            <option value="mediterranean">Mediterranean</option>
            <option value="mexican">Mexican</option>
            <option value="middle eastern">Middle Eastern</option>
            <option value="nordic">Nordic</option>
            <option value="southern">Southern</option>
            <option value="spanish">Spanish</option>
            <option value="thai">Thai</option>
            <option value="vietnamese">Vietnamese</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="type">
          <Form.Label>Type/Course</Form.Label>
          <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Any</option>
            <option value="main course">Main Course</option>
            <option value="side dish">Side Dish</option>
            <option value="dessert">Dessert</option>
            <option value="appetizer">Appetizer</option>
            <option value="salad">Salad</option>
            <option value="bread">Bread</option>
            <option value="breakfast">Breakfast</option>
            <option value="soup">Soup</option>
            <option value="beverage">Beverage</option>
            <option value="sauce">Sauce</option>
            <option value="marinade">Marinade</option>
            <option value="fingerfood">Fingerfood</option>
            <option value="snack">Snack</option>
            <option value="drink">Drink</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="keywords">
          <Form.Label>KeyWord</Form.Label>
          <Form.Control value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit" className="submit-btn">
        Get Recipes!
      </Button>
      <Button className="clear-btn" onClick={() => clearSearch(dispatch)}>Clear Results</Button>
    </Form>
  );
}

export default SearchForm;
