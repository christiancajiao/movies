import React from "react";
import ListMovies from "./ListMovies";
import SearchBar from "./SearchBar";

const App = () => {
  return (
    <div>
      <SearchBar />
      <ListMovies />
    </div>
  );
};

export default App;
