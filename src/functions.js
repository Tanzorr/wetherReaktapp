export  function getLocalCoords() {
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

