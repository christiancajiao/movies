import React from "react";
import ListMovies from "./ListMovies";

const App = () => {
  return (
    <div>
      <div className="contenedor_searchBar">
        <form>
          <input type="search" />
          <input type="submit" />
        </form>
      </div>

      <ListMovies />
    </div>
  );
};

export default App;
