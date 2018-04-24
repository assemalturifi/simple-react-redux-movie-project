//this is a component class and hooked up to the storage
import React, {Component}from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';//look to the end of the page
import {selectMovie} from '../actions/index';

class MovieList extends Component {// class based component

  createListItems(){
    return this.props.movies.map((movie)=>{
      return (
        <li
        key={movie.id}
        onClick={()=> this.props.selectMovie(movie)}
        >
        {movie.name}
         </li> //when I make list of items

      );
    });
  }

  render(){
    return (
      <ul>
          {this.createListItems()}
      </ul>
    );
  }

}
function mapStateToProps(state){//this is a function. it does take your app store, and it passes it to your component as a PROPERTY!
                              // I did this function and wrote state, because I dont want all the movie or all the data, I want some of it thats why I created this function
  return {                     // 'state' is which is your part of your store
    movies:state.movies
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators ({selectMovie: selectMovie}, dispatch)

}

export default connect (mapStateToProps, matchDispatchToProps)(MovieList);
