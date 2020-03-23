import React,{useEffect}from 'react';
import {connect, Provider} from "react-redux";



import store from "./redux/redux-store";

import './App.css';

import Content from "./Content";

function App() {


    return (


            <div className="App" >
              <h1>Wether app</h1>
                <Provider store = {store}>
                      <Content/>
                </Provider>
            </div>

  )
}



export default  App;