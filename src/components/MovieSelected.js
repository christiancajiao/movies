import React from "react";
import { connect } from "react-redux";
import logoIMBD from "./imbd.png";
import { movieSelected } from "../actions/MovieSelected";

//al comparar un objeto vacio con otro objeto vacio se complica la situacion, es mejor inicializar el estado con null, para que la comparacion tenga exito.

class MovieSelected extends React.Component {
  youtubevideo() {
    return (
      "https://www.youtube.com/embed/" + this.props.singleMovie.yt_trailer_code
    );
  }

  movieTorrent() {
    console.log(this.props.singleMovie.torrents[0].url);
    return this.props.singleMovie.torrents[0].url;
  }
  downloadTorrent() {
    return "https://www.utorrent.com/intl/es/downloads/complete/track/stable/os/win";
  }

  rederMovie() {
    return (
      <div className="container_movie">
        <div className="container_tittle">
          <h1 className="movie_tittle">{this.props.singleMovie.title_long}</h1>
          <img
            className="movie_cover"
            src={this.props.singleMovie.medium_cover_image}
          />
        </div>
        <div className="container_description">
          <h4 className="movie_fulldescription">
            {this.props.singleMovie.description_full}
          </h4>
        </div>

        <div className="container_youtube">
          <h2 className="movie_rating">
            Movie rating <img className="logo_imbd" src={logoIMBD} />:{" "}
            {this.props.singleMovie.rating}
          </h2>
          <iframe
            width="420"
            height="315"
            src={`${this.youtubevideo()}`}
          ></iframe>
          <button className="download" onClick={this.movieTorrent()}>
            DOWNLOAD MOVIE
          </button>
          <button className="download_torrent" onClick={this.downloadTorrent}>
            DOWNLOAD UTORRENT
          </button>
        </div>
        <div className="container_images">
          <img
            className="movie_backgroundimage"
            src={this.props.singleMovie.medium_screenshot_image1}
          />
          <img
            className="movie_backgroundimage"
            src={this.props.singleMovie.medium_screenshot_image2}
          />
        </div>
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
