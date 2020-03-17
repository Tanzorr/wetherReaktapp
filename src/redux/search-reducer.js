import {wetheerApi} from "../api/api"

const GET_SITY_ID= "GET_SITY_ID"



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


export const getUtherCityId= (cityName)=>{
    return async (dispatch)=>{
        let data = await wetheerApi.geCityId(cityName)
        console.log("search data", data[0].woeid);
        dispatch(setCityId(data[0].woeid))
    }
}




export default searchReducer