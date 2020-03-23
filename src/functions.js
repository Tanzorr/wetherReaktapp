import Cookies from "js-cookie"




export  function getLocalCoords() {
    if (navigator.geolocation) {

        navigator.geolocation.watchPosition(showPosition);
    } else {
        let error= "Geolocation is not supported by this browser.";
    }
    function showPosition(position) {
        refresLocation(position.coords.latitude,position.coords.longitude)
        Cookies.set('lat',position.coords.latitude );
        Cookies.set('lon',position.coords.longitude );

    }

}






export  const getDataForUrl=()=>{
    var m_names =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var d = new Date();
    var spl = d.toString().split(' ');
    var mnth = parseInt(m_names.indexOf(spl[1])+1).toString();
    mnth = (mnth.length === 1) ? '0'+mnth : mnth

    var data = spl[3]+'/'+mnth+'/'+spl[2]
    return data;
}

export function getColor(temperature) {
        if(temperature<-10){
            return "#00ffff"
        }else if(temperature>-10 && temperature<10){
            return "#fff700"
        }else if(temperature>10 && temperature<30){
            return "#ff8c00 "
        }
        return "green"
}

export function refresLocation(lat,lon) {
    if(Cookies.get('lat')!==lat && Cookies.get('lon')!==lon){
            Cookies.remove('lat')
            Cookies.remove('lon')

    }
}


export function validator(arg) {

    let error = []
    console.log("error",error)
    if(arg.length ===0){
        error.push("You shodnt add ampty strubg")
    }else if(arg.match(/^[a-z]+$/i)){
        error.push("You can use only latters")
    }
    if(error.length!==0){
        alert(error[0])
    }
}



