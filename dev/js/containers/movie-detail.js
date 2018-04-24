
import React, {Component} from 'react';
import {connect} from 'react-redux';
import RemoteImage from 'react-remote-image'

class MovieDetail extends Component {//class based component

  render(){
    if(!this.props.movie){
      return (<h4>Select a movie!</h4>);
    }

    return (

      <div>
        <img className="img-movie" src={this.props.movie.thumbnail}/>
        <h2>{this.props.movie.name}</h2>
        <h3>Genre: {this.props.movie.genre}</h3>
        <h3>IMDP: {this.props.movie.imdp}</h3>
        <h4>DESCRIPTION: {this.props.movie.description}</h4>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    movie:state.activeMovie
  };
}
export default connect(mapStateToProps)(MovieDetail);
