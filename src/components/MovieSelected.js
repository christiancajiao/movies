import React from "react";
import { connect } from "react-redux";

import { movieSelected } from "../actions/MovieSelected";

//al comparar un objeto vacio con otro objeto vacio se complica la situacion, es mejor inicializar el estado con null, para que la comparacion tenga exito.

class MovieSelected extends React.Component {
  youtubevideo() {
    return (
      "https://www.youtube.com/embed/" + this.props.singleMovie.yt_trailer_code
    );
  }

  rederMovie() {
    console.log(this.props.singleMovie);
    return (
      <div className="container_movie">
        <div>
          <h1 className="movie_tittle">{this.props.singleMovie.title_long}</h1>
          <img
            className="movie_cover"
            src={this.props.singleMovie.medium_cover_image}
          />
        </div>
        <div>
          <h2 className="movie_fulldescription">
            {this.props.singleMovie.description_full}
          </h2>
        </div>

        <div className="container_youtube">
          <h2 className="movie_rating">
            Movie rating imdb: {this.props.singleMovie.rating}
          </h2>
          <iframe
            width="420"
            height="315"
            src={`${this.youtubevideo()}`}
          ></iframe>
        </div>

        <img src={this.props.singleMovie.background_image} />
      </div>
    );
  }
  render() {
    if (!this.props.singleMovie) {
      return null;
    }
    return <div className="pelicula_seleccionada">{this.rederMovie()}</div>;
  }
}

const mapStatetoProps = (state) => {
  return { singleMovie: state.movie };
};
export default connect(mapStatetoProps, { movieSelected })(MovieSelected);
