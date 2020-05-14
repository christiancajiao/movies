import JsonMovies from "../apis/JsonMovies";

export const fetchMovieList = () => async (dispatch) => {
  const response = await JsonMovies.get("/v2/list_movies.json");

  dispatch({ type: "FETCH_MOVIELIST", payload: response.data.data.movies });
};

export const fetchCategoryDrama = () => async (dispatch) => {
  const response = await JsonMovies.get("list_movies.json?genre=drama");
  dispatch({ type: "FETCH_CATEGORY", payload: response.data.data.movies });
};
