import React from "react";
import 'bootstrap/dist/css/bootstrap.css';



export  const  Ask =({showLocalData})=>{

    return<div>
        <button onClick={showLocalData} className="btn btn-primary mb-5 mt-5">Get Local wether</button>
    </div>
}