import './pronosdia.css'


  import React from 'react'
  
  export default function WeatherForecast({ forecast, getFormattedDate }) {
    console.log("hola")
    console.log(forecast)
    return (
      <>
     
    {forecast.map((item) => (
      <div key={item.dt} className='dia'>
        <p>{getFormattedDate(item.dt_txt).substring(0, 17)}</p>
        
        {/* {item.weather.map((weather) => (
          <div key={weather.id} className='imgdias'>
            <img
              src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
              alt={weather.description}
            />
            
          </div>
          
        ))} */}

          <div key={item.weather[0].id} className='imgdias'>
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt={item.weather[0].description}
            />
            
          </div>
          
      


       {/*  hasta qui */}
        <p><span id='span1'>{item.main.temp.toFixed(0)}°C</span> <span id='span2'>11°C</span></p>
        
      </div>
    ))}
  </>
    )
  }
  
