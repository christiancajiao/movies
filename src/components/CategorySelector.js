import React from "react";
import { connect } from "react-redux";
import { fetchCategory } from "../actions/CategorySelector";
import { categoryFetchList } from "../actions/CategoryFetchList";

class CategorySelector extends React.Component {
  componentWillMount() {}

  handleOnInputChange = (event) => {
    this.props.fetchCategory(event.target.value);
    this.props.categoryFetchList(event.target.value);
    const query = event.target.value;
    console.log(query);
  };
  render() {
    return (
      <select
        id="Category"
        className="category_selector"
        onChange={this.handleOnInputChange}
        value="Category Selector"
      >
        <option value=""></option>
        <option value="Action">Action</option>
        <option value="Drama">Drama</option>
        <option value="Horror">Horror</option>
        <option value="Comedy">Comedy</option>
        <option value="Romance">Romance</option>
        <option value="Thriller">Thriller</option>
        <option value="Mystery">Mystery</option>
        <option value="Crime">Crime</option>
        <option value="Animation">Animation</option>
        <option value="Adventure">Adventure</option>
        <option value="Fantasy">Fantasy</option>
      </select>
    );
  }
}

const mapStateToProps = (state) => {
  return { movie: this.props.movies };
};
export default connect(null, { fetchCategory, categoryFetchList })(
  CategorySelector
);
