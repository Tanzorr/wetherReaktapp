import React,{useEffect,useReducer}from 'react';
import reducer from "./reducer";
import './App.css';
import {Ask} from "./Ask";

function App() {

    const [state, dispatch] = useReducer(reducer, {})

    console.log("state in App",state.lokalNov)

    useEffect(()=>{
        dispatch({
            type:"getLocalTemperature"
        })
    },[])

    useEffect(()=>{
        dispatch({
            type:"getLocalTemperature"
        })
    },[])

    const getLokation =()=>{
        dispatch({
            type:'getColor'
        })
   }


    return (
    <div className="App" >
      <h1>
          Wether app</h1>
        <Ask getLockation={getLokation}/>
    </div>
  );
}

export default App;
