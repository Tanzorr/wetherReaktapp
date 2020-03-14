import React from "react";
import {connect} from "react-redux";



 const Content =(props)=>{

     console.log("Content props",props)

     return<div>
         <h1>content</h1>
     </div>
 }

 const mapStateToProps=(state)=>{
     return state
}

 export default connect(mapStateToProps)(Content);