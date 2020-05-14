import React from "react";
import { connect } from "react-redux";
import { fetchMovieList } from "../actions";
import CategorySelector from "./CategorySelector";

class SearchBar extends React.Component {
  componentWillMount() {}

  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: {},
    };
  }
  handleOnInputChange = (event) => {
    const query = event.target.value;
    console.log(query);
  };

  mapDispatchToProps;
  render() {
    return (
      <div className="contenedor_searchBar">
        <form className="form_search">
          <input
            type="search"
            className="inputField"
            field="select"
            onChange={this.handleOnInputChange}
          />
          <input type="submit" className="Submit" />
        </form>
        <CategorySelector />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { movie: this.props.movies };
};
export default connect(null, { fetchMovieList })(SearchBar);
