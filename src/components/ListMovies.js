import React from "react";
import { connect } from "react-redux";
import { fetchMovieList } from "../actions";

class movieList extends React.Component {
  componentDidMount() {
    this.props.fetchMovieList();
  }

  rederListMovies() {
    return this.props.movies.map((movie) => {
      return (
        <div>
          <img src={movie.medium_cover_image} />
          <h1>{movie.title}</h1>
          <p>{movie.description_full}</p>
        </div>
      );
    });
  }
  render() {
    console.log(this.props.movies);
    return <div className="contenedor_imagenes">{this.rederListMovies()}</div>;
  }
}

const mapStatetoProps = (state) => {
  return { movies: state.movies };
};
export default connect(mapStatetoProps, { fetchMovieList })(movieList);
