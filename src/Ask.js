import React from "react";
import 'bootstrap/dist/css/bootstrap.css';



export  const  Ask =({getLockation})=>{

    return<div>
        <button onClick={getLockation} className="btn btn-primary">Allow get know your location</button>
    </div>
}