import React from "react";


const WetherData= ({data})=>{
    return <div>
        <h3>Wether Data</h3>

        <p>now:{data.temperature[0]}</p>
        <p>min:{data.temperature[1]}</p>
        <p>max:{data.temperature[2]}</p>
        <p>wind_spead:{data.wind_spead}</p>
        <p>humidity:{data.humidity}</p>
    </div>
}

export default WetherData