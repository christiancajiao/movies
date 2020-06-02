import React from "react";
import { connect } from "react-redux";
import { fetchMovieList } from "../actions";
import { movieSelected } from "../actions/MovieSelected";
import { nextPage } from "../actions/NextPage";
import { fetchList } from "../actions/FetchList";

let counterofpages = 1;
let loadNextPage = false;

class movieList extends React.Component {
  componentDidMount() {
    this.props.fetchMovieList();
    this.props.fetchList(counterofpages);
  }

  onClick = (e) => {
    this.props.movieSelected(e.target.id);
  };

  nexpageSum = () => {
    counterofpages = counterofpages + 1;
  };

  loadNextPage = (e) => {
    let direccionurl = this.props.url;
    if (direccionurl.includes("?")) {
      console.log("tiene ?");
    }
    this.nexpageSum();
    this.props.nextPage(counterofpages, direccionurl);
    console.log(direccionurl);
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
    return (
      <div className="conteiner_ofconteiners">
        <div className="contenedor_imagenes">{this.rederListMovies()}</div>
        <button className="more_results" onClick={this.loadNextPage}>
          More Results...
        </button>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return { movies: state.movies, url: state.url };
};
export default connect(mapStatetoProps, {
  fetchMovieList,
  movieSelected,
  nextPage,
  fetchList,
})(movieList);
