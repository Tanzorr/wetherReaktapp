import * as axios from "axios";


//let baseURL = 'https://www.metaweather.com//api/location/search/?lattlong=(latt),(long)'

let baseURL = 'api/location/search/?'

export const wetheerApi={
    getKoordsWether(lat,lon){
        console.log('locationApi',lat);

       return  axios.get(`${baseURL}lattlong=${lat},${lon}`).then(
            responce=>{
                console.log('responce',responce.data)
                return responce.data;
            }
        )
    },

    getCityWether(CityId,data){
       return  axios.get(`api/location/${CityId}/${data}/`).then(
            responce=>{
                return responce.data
            }

        )
    },

    geCityId(cityName){
        return axios.get(`api/location/search/?query=${cityName}`).then(
            responce=>{
                return responce.data
            })
    }
}