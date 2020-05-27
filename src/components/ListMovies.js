import React from "react";
import { connect } from "react-redux";
import { fetchMovieList } from "../actions";
import { movieSelected } from "../actions/MovieSelected";

class movieList extends React.Component {
  componentDidMount() {
    this.props.fetchMovieList();
  }

  onClick = (e) => {
    this.props.movieSelected(e.target.id);
  };

  rederListMovies() {
    return this.props.movies.map((movie) => {
      return (
        <div onClick={this.onClick}>
          <h2 className="movie_title">{movie.title}</h2>
          <div className="movie_description">
            <p className="movie_paragraph" id={movie.id}>
              {movie.description_full}
            </p>
            <button
              className="ver_pelicula"
              id={movie.id}
              onClick={this.onClick}
            >
              VER PELICULA
            </button>
          </div>

          <img src={movie.medium_cover_image} className="cover_image" />
        </div>
      );
    });
  }
  render() {
    return <div className="contenedor_imagenes">{this.rederListMovies()}</div>;
  }
}

const mapStatetoProps = (state) => {
  return { movies: state.movies };
};
export default connect(mapStatetoProps, { fetchMovieList, movieSelected })(
  movieList
);
