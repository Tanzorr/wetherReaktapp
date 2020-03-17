import {wetheerApi} from "../api/api"

import {getLocalCoords,getDataForUrl} from "../functions";
const GET_LOCAL_CITY ="GET_LOCAL_CITY"
const GET_LOCAL_TEMPERATURE="GET_LOCAL_TEMPERATURE"

let initialState={
    city:null,
    cityId:null,
    temperature:[],

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
                temperature: action.temperatureNow
            }

        default:
            return state;
    }
}

export const setTemperatureAC = (temperatureNow =[])=>{

    return {
        type: GET_LOCAL_TEMPERATURE,
        temperatureNow

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
                let cityId = data[0]. woeid
           dispach(setLocalCityAC(cityName,cityId))
        }

}



export const getLocalTemperature=(cityId)=>{
    return async (dispach)=>{
        let data = await wetheerApi.getCityWether(cityId, getDataForUrl())
        console.log("sity info",data[0])

        dispach(setTemperatureAC([data[0].min_temp,data[0].max_temp,data[0].the_temp,]))
    }
}





export default wetherReducer;