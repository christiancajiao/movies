import { combineReducers } from "redux";
import MovieListReducer from "./MovieListReducer";
import SearchReducer from "./SearchReducer";
import MovieSelectedReducer from "./MovieSelectedReducer";
import { connect } from "react-redux";

export default combineReducers({
  movies: MovieListReducer,
  text: SearchReducer,
  movie: MovieSelectedReducer,
});
