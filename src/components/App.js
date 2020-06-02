import React from "react";
import ListMovies from "./ListMovies";
import SearchBar from "./SearchBar";
import MovieSelected from "./MovieSelected";
import { connect } from "react-redux";

class App extends React.Component {
  onClick() {
    return window.location.reload(false);
  }
  render() {
    if (!this.props.singleMovie) {
      return (
        <div className="container_ofcontainers">
          <SearchBar />

          <ListMovies />
        </div>
      );
    }
    return (
      <div className="conteiner_singleMovie">
        <button className="back_button" onClick={this.onClick}>
          BACK
        </button>
        <MovieSelected />
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return { singleMovie: state.movie };
};
export default connect(mapStatetoProps, {})(App);
