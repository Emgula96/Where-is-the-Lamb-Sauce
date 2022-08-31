import React from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import "../css/search.css";

const Search = () => {
  return (
    <div className="backgroundimg">
      <h1>SEARCH FOR NEW RECIPE'S HERE!</h1>
      <br></br>
      <SearchForm />
      <SearchResults />
    </div>
  );
};

export default Search;
