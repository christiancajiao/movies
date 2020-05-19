import { combineReducers } from "redux";
import MovieListReducer from "./MovieListReducer";
import SearchReducer from "./SearchReducer";

export default combineReducers({
  Listofmovies: MovieListReducer,
  movies: SearchReducer,
});
