import React from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import "../css/search.css";

const Search = () => {
  return (
    <div className="backgroundimg">
      <h1>Search for a new Recipe</h1>
      <SearchForm />
      <SearchResults />
    </div>
  );
};

export default Search;
