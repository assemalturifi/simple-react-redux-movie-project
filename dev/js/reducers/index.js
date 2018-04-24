//I created this, to combine all reducers into one object
import {combineReducers} from 'redux';
import MovieReducer from './reducer-movies';
import ActiveMovieReducer from './reducer-active-movie';

const allReducers = combineReducers({// i combined all reducers in one big main object main object taht will be thrown to the store
  movies:MovieReducer,
  activeMovie:ActiveMovieReducer
});
export default allReducers;
