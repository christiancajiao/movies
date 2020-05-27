import React from "react";
import ListMovies from "./ListMovies";
import SearchBar from "./SearchBar";
import MovieSelected from "./MovieSelected";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    if (!this.props.singleMovie) {
      return (
        <div>
          <SearchBar />

          <ListMovies />
        </div>
      );
    }
    return (
      <div>
        <MovieSelected />
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return { singleMovie: state.movie };
};
export default connect(mapStatetoProps, {})(App);
