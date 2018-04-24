import 'babel-polyfill';// it is a special tool that runs in the background that makes contamaple with older browser//
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';//I create store for all storage, instead of wrting const createStore=redux.createStore;
import allReducers from './reducers';
import App from './components/app';

const store=createStore(allReducers);//the MAIN store, i stick all the movies object



ReactDOM.render(
/*{store}prop,you take the store and make it available to all components}*/
<Provider store={store}>


 <App/>

</Provider>

  ,document.getElementById('root'));
