import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import "./Weather.css";

function Weather() {
  const [weatherData, setWeatherData] = useState();
  const { city } = useParams();

  useEffect(() => {
    const apiKey = "fe9e74278ec14adc9ef43550230403";
    axios
      .get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [city]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

 

  return (
    <div className="weather-container">
      <h1>Weather Data</h1>
      <div className="box-container">
      <h2>{city}</h2> 
          <div>Temperatuure:{weatherData.current.temp_c}°C/{weatherData.current.temp_f}F</div>
          <div>Location    : {weatherData.location.name}</div>
          <div>Lattitude   : {weatherData.location.lat}</div>
          <div>Longitude   : {weatherData.location.lon}</div>
          <div>Time Zone   : {weatherData.location.tz_id}</div>
          <div>condition   : {weatherData.current.condition.text}{" "}<img src={weatherData.current.condition.icon} alt="icon" /></div>
          <div>Pressure    : {weatherData.current.pressure_in} in/{weatherData.current.pressure_mb} mb</div>
          <div>Precip      : {weatherData.current.precip_in} in/{weatherData.current.precip_mm} mm</div>
          <div>Humidity    : {weatherData.current.humidity}</div>
          <div>Feelslike   : {weatherData.current.feelslike_c}°C</div>
          <div>Visibility  : {weatherData.current.vis_km}km/{weatherData.current.vis_miles}miles</div>
          <div>UV :{weatherData.current.uv}</div>
          <div>Gust :{weatherData.current.gust_kph}kph/{weatherData.current.gust_kph} mph{" "}</div>
      </div>
    </div>
  );
}

export default Weather;
