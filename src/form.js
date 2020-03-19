import React,{useState} from "react";



const Form = ({getUtehrCity})=>{
    let [City, setCity]=useState("")


    return <div>
        <input type="text" onChange={(e)=>{setCity(e.target.value)} } value={City}/>
        <input type="submit" onClick={()=>{getUtehrCity(City); setCity("")}}/>
    </div>
}

export default Form