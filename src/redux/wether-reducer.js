import {wetheerApi} from "../api/api"

import {getLocalCoords,getDataForUrl} from "../functions";
const GET_LOCAL_CITY ="GET_LOCAL_CITY"
const GET_LOCAL_TEMPERATURE="GET_LOCAL_TEMPERATURE"

let initialState={
    city:null,
    cityId:null,
    temperature:[],
    wind_spead:null,
    humidity:null,

    background:"green"

}


const wetherReducer =(state=initialState, action)=>{

    switch (action.type) {

        case GET_LOCAL_CITY :

            return {
                ...state,
                city:action.city,
                cityId:action.cityId

            }

        case  GET_LOCAL_TEMPERATURE :
            return {
                ...state,
                temperature: action.temperatureNow,
                wind_spead:action.wind,
                humidity:action.cold
            }

        default:
            return state;
    }
}

export const setTemperatureAC = (temperatureNow =[],wind,cold)=>{

    return {
        type: GET_LOCAL_TEMPERATURE,
        temperatureNow,
        wind,
        cold

    }
}


export const setLocalCityAC = (city, cityId)=>{

    return {type: GET_LOCAL_CITY,
        city,
        cityId
    }
}



export  const  getLocalCity=()=>{
    getLocalCoords()
    return  async (dispach)=>{
            let data = await wetheerApi.getKoordsWether(localStorage.lat,localStorage.lon)
                console.log("data",data)
                let cityName = data[0].title
                let cityId = data[0].woeid
           dispach(setLocalCityAC(cityName,cityId))
        }

}



export const getLocalTemperature=(cityId)=>{
    return async (dispach)=>{
        let data = await wetheerApi.getCityData(cityId)
        console.log("sity info",data.consolidated_weather)
        data = data.consolidated_weather;

        dispach(setTemperatureAC([
                Math.floor( data[0].the_temp,3),
                Math.floor(data[0].min_temp,3),
                Math.floor(data[0].max_temp,3),],
            Math.floor(data[0].wind_speed,3),
            Math.floor( data[0].humidity,3)
        ))
    }
}





export default wetherReducer;