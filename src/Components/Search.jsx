import React, { useState, useEffect } from "react";
import Temp from "./Temp";
import "./compStyles.css";







function Search()  { 
    
    const [search, setSearch] = useState("");
   const [weatherData, setWeatherData] = useState([]);
   const [error , setError] = useState();






    const handleChange = (e) => {

        setSearch(e.target.value);

    }


const handleKeyPress = async (e) => { 
    if(e.key === "Enter") {
        console.log("fetching api for", search);
        const api = (`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=9ac99c147d78a201d0f1fdc0517c59b4&units=metric`);
        fetch(api)
            .then(response => response.json())
            .then(data => {
                if (data.cod === "404") {
                    setError(data.message);
                } else {
                    const filterData = {
                        temperature: data.main.temp,
                        name: data.name,
                        weather: data.weather[0].main
                    };
                    setWeatherData(filterData);
                    setError(null);
                }
            })
            .catch((err) => {
                setError("An error occurred while fetching the data.");
            });
        console.log(weatherData);
    }
}
    
    
    return(
    <div className="container">
<input 
className="search" 
type="text" 
placeholder="Name of the city"
value={search}
onChange={handleChange}
onKeyDown={handleKeyPress}
  />
  <Temp weather={weatherData} />
</div>
);

}





export default Search;