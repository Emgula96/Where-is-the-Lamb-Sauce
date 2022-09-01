import React from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import "../css/search.css";
import { Container } from "react-bootstrap";

const Search = () => {
  return (
    <div className="backgroundimg">
      <h1 className="search-title">SEARCH FOR NEW RECIPE'S HERE!</h1>
      <br></br>
      <SearchForm />
      <Container>
        <SearchResults />
      </Container>
    </div>
  );
};

export default Search;
