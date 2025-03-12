import React, {useState, useEffect} from "react";
import  "./compStyles.css";
import Snow from "../IMG/snowing.svg";
import Sun from "../IMG/sun.svg";
import Cloud from "../IMG/cloud.svg";
import Rain from "../IMG/rain.svg";
import Storm from "../IMG/storm.svg";
import Mist from "../IMG/mist.svg";

function Temp({weather}) {

   
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(false);
        setTimeout(() => setVisible(true), 200);
    }, [weather]);

    const weatherIcons = {
        "Snow": Snow, 
        "Clear": Sun,
        "Clouds": Cloud, 
        "Rain": Rain, 
        "Thunderstorm": Storm,
        "Mist": Mist,
        "Haze": Mist

    }

    const weatherDescription = weather.weather || "Clear";
    const weatherIcon = weatherIcons[weatherDescription] || Sun ;
    

    
    
    return(
<div 
 style={{
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(25px)", 
    transition: "opacity 1.5s ease-in-out, transform 1.5s ease-in-out" 
}}

className="temp">
   <img src={weatherIcons[weatherDescription]} alt={weatherDescription} width={80} height={80} />
    <h1>{weather.name}</h1>
    <h2>{Math.floor(weather.temperature)} °C</h2>
</div>
);

 }

 export default Temp;