import { PAGE_NEXT } from "./types";
import axios from "axios";

export const nextPage = (number, url) => (dispatch) => {
  if (url.includes("?")) {
    axios
      .get(`${url}&page=${number}`)
      .then((response) =>
        dispatch({
          type: PAGE_NEXT,
          payload: response.data.data.movies,
        })
      )
      .catch((err) => console.log(err));
  } else {
    axios
      .get(`${url}?page=${number}`)
      .then((response) =>
        dispatch({
          type: PAGE_NEXT,
          payload: response.data.data.movies,
        })
      )
      .catch((err) => console.log(err));
  }
};
