import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Ask} from "./Ask";
import {getLocalCity, getLocalTemperature} from "./redux/wether-reducer";
import {getUtherCityData, getUtherCityId} from "./redux/search-reducer";



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



     useEffect(()=>{

         props.getUtherCityData(props.cityUtherId)
     },[props.cityUtherId])


     return<div style={{background:props.background}}>
         <h1>{props.city}</h1>
         <Ask/>
     </div>
 }

 const mapStateToProps=(state)=>{
     return {
         background:state.wetherReducer.background,
         city:state.wetherReducer.city,
         cityId: state.wetherReducer.cityId,
         cityUtherId: state.searchReducer.cityId


     }

}

 export default connect(mapStateToProps, {getLocalCity, getLocalTemperature, getUtherCityId,getUtherCityData})(Content);