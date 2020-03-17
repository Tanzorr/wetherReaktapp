import {createStore, combineReducers, applyMiddleware} from 'redux';


import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import wetherReducer from "./wether-reducer";
import searchReducer from './search-reducer'





let reducers = combineReducers({
    wetherReducer:wetherReducer,
    searchReducer:searchReducer
});


//let composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));

window.store = store;



export  default store;


