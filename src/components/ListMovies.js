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
          <h2 className="movie_title">{movie.title}</h2>
          <p className="movie_description">{movie.description_full}</p>
          <img src={movie.medium_cover_image} className="cover_image" />
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
  return { movies: state.movies.movies };
};
export default connect(mapStatetoProps, { fetchMovieList })(movieList);
