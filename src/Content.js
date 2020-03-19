import React, {useEffect,useState} from "react";
import {connect} from "react-redux";
import {Ask} from "./Ask";
import {getLocalCity, getLocalTemperature} from "./redux/wether-reducer";
import {getUtherCityData, getUtherCityId} from "./redux/search-reducer";
import Form from "./form";
import WetherData from "./WetherData";
import {getColor} from "./functions";



 const Content =(props)=>{

     let localData= props.wetherLocal
     let utherData = props.serchReducer

     let [Gdata, setGdata]=useState(localData)
     let [Uther, setUther]=useState(false)
        console.log("serch data",utherData)
         useEffect(()=>{
             props.getUtherCityData(utherData.cityId)

         },[utherData.cityId])
    useEffect(()=> {
        if (utherData.humidity !== null) {
            setGdata(utherData)
        }
    })


     useEffect(()=>{
         setGdata(localData)
     },[localData])

     console.log("General Data",Gdata)
     console.log("utherData",utherData)

     useEffect(()=>{
         props.getLocalCity()

     },[])



     let showLocalData =()=>{
            props.getLocalTemperature(localData.cityId)
        }

        let showUtherData =(cityId)=>{
            props.getUtherCityId(cityId)
            setUther(true)
        }

        console.log("Temp Color",getColor(Gdata.temperature[0]))
        console.log("Temp Temperature",Gdata.temperature[0])

        return<div  className="content" style={{background:getColor(Gdata.temperature[0])}}>
         <h1>{Gdata.city}</h1>
         <Ask showLocalData={ showLocalData}/>
         <div>
             <Form getUtehrCity={props.getUtherCityId}/>
             <WetherData data={Gdata}/>
         </div>
     </div>
 }

 const mapStateToProps=(state)=>{
     return {
         wetherLocal:{
             background:state.wetherReducer.background,
             city:state.wetherReducer.city,
             cityId: state.wetherReducer.cityId,
             temperature: state.wetherReducer.temperature,
             wind_spead:state.wetherReducer.wind_spead,
             humidity:state.wetherReducer.humidity
         },
         serchReducer:{
             cityId: state.searchReducer.cityId,
             city:state.searchReducer.cityName,
             temperature:state.searchReducer.temperature,
             wind_spead:state.searchReducer.wind_spead,
             humidity:state.searchReducer.humidity

         }


     }

}

 export default connect(mapStateToProps, {getLocalCity, getLocalTemperature, getUtherCityId,getUtherCityData})(Content);