import React, { useState } from "react";
import "./../styles/App.css";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weather, setWeather] = useState({
    temperature: 25,
    conditions: "Sunny",
  })
  // console.log(weatherData);

  return (
    <div>
      <WeatherDisplay item={weather}/>     
        
      
    </div>
  );
};

export default App;
