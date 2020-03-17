import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Ask} from "./Ask";
import {getLocalCity, getLocalTemperature} from "./redux/wether-reducer";
import {getUtherCityId} from "./redux/search-reducer";



 const Content =(props)=>{

        console.log("Content Props",props)

     useEffect(()=>{
         props.getLocalCity()

     },[])

     useEffect(()=>{
         props.getLocalTemperature(props.cityId)
     },[props.cityId])

     useEffect(()=>{
         props.getUtherCityId("Kiev")
     },[])


     return<div style={{background:props.background}}>
         <h1>{props.city}</h1>
         <Ask/>
     </div>
 }

 const mapStateToProps=(state)=>{
     return {
         background:state.wetherReducer.background,
         city:state.wetherReducer.city,
         cityId: state.wetherReducer.cityId
     }

}

 export default connect(mapStateToProps, {getLocalCity, getLocalTemperature, getUtherCityId})(Content);