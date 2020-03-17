import {wetheerApi} from "../api/api"

const GET_SITY_ID= "GET_SITY_ID"
const GET_SITY_DATA="GET_SITY_DATA"



let initialState={
    cityId:null,
    temperature: [],
    wind:null,
    colds:null

}

const searchReducer=(state=initialState, action)=>{
    console.log("action serch reducer", action.type)
    switch (action.type) {

        case GET_SITY_ID :
            return {
                ...state,
                cityId:action.cityId
            }
        case GET_SITY_DATA:
            return {
                ...state,
                temperature: action.temperataure,
                wind: action.wind,
                colds:action.colds

            }

        default:
            return state
    }


}


export const setCityId=(cityId)=>{
    return{
        type:"GET_SITY_ID",
        cityId
    }
}

export const setCityData=(temperataure,wind,colds )=>{
    return{
        type:"GET_SITY_DATA",
        temperataure,
        wind,
        colds
    }
}


export const getUtherCityId= (cityName)=>{
    return async (dispatch)=>{
        let data = await wetheerApi.geCityId(cityName)
        console.log("search data", data[0].woeid);
        dispatch(setCityId(data[0].woeid))
    }
}

export const getUtherCityData = (cityId)=>{

    return async (dispatch)=>{

        let data = await  wetheerApi.getCityData(cityId)
        console.log("serche city Data ", data.consolidated_weather[0])
        let cityData= data.consolidated_weather[0]
       dispatch(setCityData([cityData.the_temp,cityData.max_temp,cityData.min_temp], cityData.wind_speed, cityData.humidity))

    }
}





export default searchReducer