import React from "react";
import { connect } from "react-redux";
import { fetchMovieList } from "../actions";


class SearchBar extends React.Component {
    componentWillMount () {

    }


    render ()
}

 const mapStateToProps = state => {
 return {movie: this.props.movies}
}
export default connect (null, { fetchMovieList}) (SearchBar);