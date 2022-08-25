import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function InputField() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Choose Cuisine</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>any</option>
            <option>African</option>
            <option>American</option>
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
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Type/Course</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option></option>
            <option></option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>KeyWord</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default InputField;
