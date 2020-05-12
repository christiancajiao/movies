export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_MOVIELIST":
      return action.payload;
    default:
      return state;
  }
};
