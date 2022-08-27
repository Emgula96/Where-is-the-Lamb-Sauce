import React from "react";
import RecipeCard from "./RecipeCard";
import { useSelector } from "react-redux";

const SearchResults = () => {
  const results = useSelector((state) => state.searchR.searchResults);

  return (
    <div>
      SearchResult
      {results.map((result) => (
        <RecipeCard key={result.id} recipe={result} />
      ))}
    </div>
  );
};

export default SearchResults;
