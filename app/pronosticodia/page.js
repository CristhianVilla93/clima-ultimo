import './pronosdia.css'

const WeatherForecast = ({ forecast, getFormattedDate }) => (
    <>
      
      {forecast.map((item) => (
        <div key={item.dt} className='dia'>
          <p>{getFormattedDate(item.dt_txt).substring(0, 17)}</p>
          
          {item.weather.map((weather) => (
            <div key={weather.id} className='imgdias'>
              <img
                src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
                alt={weather.description}
              />
              
            </div>
            
          ))}
          <p><span id='span1'>{item.main.temp.toFixed(0)}°C</span> <span id='span2'>11°C</span></p>
          
        </div>
      ))}
    </>
  );
  
  export default WeatherForecast;