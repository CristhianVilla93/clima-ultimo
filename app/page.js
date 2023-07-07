'use client'

import React, { useState, useEffect } from 'react';
import CityInput from './input/page';
import CurrentWeather from './actual/page';
import WeatherForecast from './pronosticodia/page';
import Datosdia from './pronosticodatos/page';


const Home = () => {
  const [sideBar, setSideBar]= useState(false);
  const [city, setCity] = useState('guayaquil');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  function handleSideBar() {
    setSideBar(!sideBar)
  }

  function Circulo() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40"
        viewBox="0 -960 960 960"
        width="40"
        fill='#E7E7EB'
      >
        <path d="M450-42v-75q-137-14-228-105T117-450H42v-60h75q14-137 105-228t228-105v-75h60v75q137 14 228 105t105 228h75v60h-75q-14 137-105 228T510-117v75h-60Zm30-134q125 0 214.5-89.5T784-480q0-125-89.5-214.5T480-784q-125 0-214.5 89.5T176-480q0 125 89.5 214.5T480-176Zm0-154q-63 0-106.5-43.5T330-480q0-63 43.5-106.5T480-630q63 0 106.5 43.5T630-480q0 63-43.5 106.5T480-330Zm0-60q38 0 64-26t26-64q0-38-26-64t-64-26q-38 0-64 26t-26 64q0 38 26 64t64 26Zm0-90Z" />
      </svg>
    );
  }

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const fetchData = async () => {
    try {
      const currentWeatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8087ec1c35c0186373f21276aa07faa0&units=metric`
      );
      if (!currentWeatherResponse.ok) {
        throw new Error('Current weather not found');
      }
      const currentWeatherData = await currentWeatherResponse.json();
      setCurrentWeather(currentWeatherData);
      setError(null);

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=8087ec1c35c0186373f21276aa07faa0&units=metric`
      );
      if (!forecastResponse.ok) {
        throw new Error('Forecast not found');
      }
      const forecastData = await forecastResponse.json();
      const filteredForecast = forecastData.list.filter(
        (item) => item.dt_txt.includes('09:00:00')
      );
      setForecast(filteredForecast);
      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setCurrentWeather(null);
      setForecast(null);
      setError(error.message);
    }
  };

  const getFormattedDate = (dateString) => {
    const options = { weekday: `long`, year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    fetchData(); 
  }, []); 

  return (
    <section className="contenedormayor">
      <section className="contenedor1">
        <div id='searchAndLocation'>
        <button id='buscadorboton' onClick={handleSideBar}>Search for places</button>
        <Circulo/>
        </div>
        {sideBar === true? (
          <nav id='buscador'>
            <CityInput
              handleSideBar={handleSideBar}
              value={city}
              onChange={handleInputChange}
              onClick={fetchData}
            />
            {error && <p className='alerterror'>{error}</p>}
          </nav> 

        ): (
          ''
        )}
        <div>
          {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
        </div>
      </section>

      <section className="contenedor2">
        <div className="contedias">
          {forecast && (
            <WeatherForecast
              forecast={forecast}
              getFormattedDate={getFormattedDate}
            />
          )}
        </div>

        <div className="contedatos">
          {currentWeather && <Datosdia currentWeather={currentWeather} />}
        </div>
      </section>
    </section>
  );
};

export default Home;