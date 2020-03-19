import React from "react";
import 'bootstrap/dist/css/bootstrap.css';



export  const  Ask =({showLocalData})=>{

    return<div>
        <button onClick={showLocalData} className="btn btn-primary">Allow get know your location</button>
    </div>
}