import React from "react";
import { connect } from "react-redux";
import { fetchMovieList } from "../actions";
import CategorySelector from "./CategorySelector";
import { fetchMovie, searchMovie } from "../actions/searchAction";

class SearchBar extends React.Component {
  componentWillMount() {}

  handleOnInputChange = (event) => {
    this.props.searchMovie(event.target.value);
    const query = event.target.value;
    console.log(query);
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.props.fetchMovie(this.props.text);
  };

  mapDispatchToProps;
  render() {
    return (
      <div className="contenedor_searchBar">
        <form className="form_search" onSubmit={this.onSubmit}>
          <input
            type="search"
            className="inputField"
            field="select"
            onChange={this.handleOnInputChange}
            onSubmit={this.onSubmit}
          />
          <input type="submit" className="Submit" />
        </form>
        <CategorySelector />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { text: state.text };
};
export default connect(mapStateToProps, {
  fetchMovie,
  fetchMovieList,
  searchMovie,
})(SearchBar);
