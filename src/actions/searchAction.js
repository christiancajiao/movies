import JsonMovies from "../apis/JsonMovies";
import { SEARCH_MOVIE, UPDATE_MOVIES, FETCH_MOVIELIST } from "./types";
import axios from "axios";

//export const fetchMovie = (text) => async (dispatch) => {
//  const response = await JsonMovies.get(`list_movies.json?query_term=${text}`);
//  dispatch({ type: "SEARCH_MOVIE", payload: response.data });
//};
export const fetchHomeList = () => (dispatch) => {
  axios
    .get(`https://yts.mx/api/v2/list_movies.json`)
    .then((response) =>
      dispatch({
        type: UPDATE_MOVIES,
        payload: response.data.data.movies,
      })
    )
    .catch((err) => console.log(err));
};

export const searchMovie = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text,
  });
};

export const fetchMovie = (text) => (dispatch) => {
  axios
    .get(`https://yts.mx/api/v2/list_movies.json?query_term=${text}`)
    .then((response) =>
      dispatch({
        type: UPDATE_MOVIES,
        payload: response.data.data.movies,
      })
    )
    .catch((err) => console.log(err));
};
