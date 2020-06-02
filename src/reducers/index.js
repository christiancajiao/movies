import { combineReducers } from "redux";
import MovieListReducer from "./MovieListReducer";
import SearchReducer from "./SearchReducer";
import MovieSelectedReducer from "./MovieSelectedReducer";

import fetchListUrl from "./fetchListUrl";

export default combineReducers({
  url: fetchListUrl,
  movies: MovieListReducer,
  text: SearchReducer,
  movie: MovieSelectedReducer,
});
