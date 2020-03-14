import {createStore, combineReducers, applyMiddleware} from 'redux';

import thunkMiddleware from "react-thunk";


import { composeWithDevTools } from 'redux-devtools-extension';
import {reducer as formReducer} from 'redux-form';
import wetherReducer from "./wether-reducer";
import searchReducer from "./wether-reducer";

let reducers = combineReducers({
    wetherReducer:wetherReducer,
    searchReducer:searchReducer
});


//let composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeWithDevTools());

window.store = store;

console.log("in react redux",store)

export  default store;


