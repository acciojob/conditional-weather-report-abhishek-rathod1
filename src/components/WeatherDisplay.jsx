import React from "react";

const WeatherDisplay = ({item}) => {
  // console.log('weather data',item);
  return (
    <div>
      <p className="temp">
        Temperature:{" "}
        <span style={{color: item.temperature > 20 ? 'red': 'blue'}}>
          {item.temperature}
        </span>
      </p>
      <p className="cond">Conditions: {item.conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
