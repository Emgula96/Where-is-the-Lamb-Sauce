import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="homeImage">
        <div className="">
          <h1 style={{ fontSize: "50px" }}>Where IS the LAMB SAUCE!?</h1>
          <h5>Your one stop for meal prep.</h5>
          <Link to="/search">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
