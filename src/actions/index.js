import JsonMovies from "../apis/JsonMovies";
import { UPDATE_MOVIES } from "./types";

export const fetchMovieList = () => async (dispatch) => {
  const response = await JsonMovies.get("/v2/list_movies.json");

  dispatch({ type: UPDATE_MOVIES, payload: response.data.data.movies });
};
