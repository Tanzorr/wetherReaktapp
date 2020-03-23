import {wetheerApi} from "../api/api"
import {validator} from "../functions";

const GET_SITY_ID= "GET_SITY_ID"
const GET_SITY_DATA="GET_SITY_DATA"



let initialState={
    cityId:null,
    cityName:null,
    temperature: [],
    wind_spead:null,
    humidity:null

}

const searchReducer=(state=initialState, action)=>{
    console.log("action serch reducer", action.type)
    switch (action.type) {

        case GET_SITY_ID :
            return {
                ...state,
                cityId:action.cityId,
                cityName: action.cityName

            }
        case GET_SITY_DATA:
            return {
                ...state,
                temperature: action.temperataure,
                wind_spead: action.wind_spead,
                humidity:action.humidity

            }

        default:
            return state
    }


}


export const setCityId=(cityId,cityName)=>{
    return{
        type:"GET_SITY_ID",
        cityId,
        cityName
    }
}

export const setCityData=(temperataure,wind_spead,humidity )=>{
    return{
        type:"GET_SITY_DATA",
        temperataure,
        wind_spead,
        humidity
    }
}


export const getUtherCityId= (cityName)=>{
    validator(cityName);
    return async (dispatch)=>{
        let data = await wetheerApi.geCityId(cityName)

        dispatch(setCityId(data[0].woeid,cityName))
    }
}

export const getUtherCityData = (cityId)=>{

    return async (dispatch)=>{

        let data = await  wetheerApi.getCityData(cityId)
        console.log("serche city Data ", data.consolidated_weather[0])
        console.log("data from search",data.title)
        let cityData= data.consolidated_weather[0]
       dispatch(setCityData([
           Math.floor(cityData.the_temp,2),
               Math.floor(cityData.min_temp,2),
               Math.floor(cityData.max_temp,2)],
           Math.floor(cityData.wind_speed,2),
           Math.floor(cityData.humidity,2)))

    }
}





export default searchReducer