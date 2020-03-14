import {wetheerApi} from "./api/api";


let initialState={
    location:{
        lat:null,
        alt:null
    },

    localTemperature:null
}


export default function (state=initialState,action) {
    console.log("action",action);
        switch (action.type) {
            case 'getLocation':
                let LocatObj =  setLokation();

                return {
                    ...state,
                    //location
                }
            case 'getLocalTemperature':

                        return {
                            ...state,
                            localTemperature:setlocaltemperature(localStorage.lat, localStorage.lon)
                        }

            case "getColor":
                setBackegroundColor()




                default:
                return state;
        }
}



//functions


//get user location

let setLokation =()=>{
    let location=[];
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        let error= "Geolocation is not supported by this browser.";
    }
    function showPosition(position) {
        localStorage.setItem('lat',position.coords.latitude);
        localStorage.setItem('lon',position.coords.longitude);
    }


}


//get local temperature
setLokation()


console.log("lockal storage lat",localStorage.lon)




let LocalTemp = setlocaltemperature(localStorage.lat, localStorage.lon);

console.log("localTemp", LocalTemp['localMin']);


console.log("set lokal now",setlocaltemperature(localStorage.lat, localStorage.lon));

function setlocaltemperature(lat,lon) {
    let  result ={}
    let data = wetheerApi.getKoordsWether(lat,lon)
            data.then(data=>{
                console.log("data",data[0].woeid)
                let cityId = data[0].woeid
                var m_names =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                var d = new Date();
                var spl = d.toString().split(' ');
                var mnth = parseInt(m_names.indexOf(spl[1])+1).toString();
                mnth = (mnth.length == 1) ? '0'+mnth : mnth

                var data = spl[3]+'/'+mnth+'/'+spl[2]

                let CityData = wetheerApi.getCityWether(cityId,data);
               return  CityData.then(
                    data=>{
                        console.log("City Data",data)
                        let lokalMin = data[0].min_temp
                        let lokalMax = data[0].max_temp
                        let lokalNow = data[0].the_temp

                        console.log("lokal naw",lokalNow)
                        result.lokalMin =lokalMin
                        result.lokalMax =lokalMax
                        result.lokalNov =lokalNow

                        localStorage.setItem("lokalmin",lokalMin)
                        localStorage.setItem("lokalmax",lokalMax)
                        localStorage.setItem("lokalNow",lokalNow)
                    }
                )

            })

        return result

}


function  setBackegroundColor() {
        if (localStorage.lokalNow>-10 ){
            localStorage.setItem("color","#00ffff " )
        }else if(localStorage.getItem("lockalNow")<10){
                localStorage.setItem("color","#00ffff " )
    }else if(localStorage.getItem("lockalNow")<30){
            localStorage.setItem("color","#ff8c00 for" )
        }
}






