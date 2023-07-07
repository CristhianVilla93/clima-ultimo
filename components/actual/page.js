import './currentWeather.css'
const currentDate = new Date();
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
};


function Geolocation() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#88869D"
      className="bi bi-geo-alt-fill"
      viewBox="0 0 16 16"
    >
      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </svg>
  );
}

const CurrentWeather = ({ currentWeather }) => (
  <>
    <div className="conteneactual">
      <div className="climactual1">
        {currentWeather.weather.map((weather) => (
          <div key={weather.id} className="climactual1">
            <img
              src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
              alt={weather.description}
            />
            <p>{currentWeather.main.temp.toFixed(0)}<span>°C</span></p>
            <p>{weather.description}</p>
          </div>
        ))}
      </div>

      <div className="climactual2">
        <p>
          <span>Today</span>
          <span>.</span>
          <span>
            {currentDate
              .toLocaleDateString(undefined, options)
              .substring(0, 17)}
          </span>
        </p>
        <div className='ciudad'>
          <Geolocation/>
          <h2>{currentWeather.name}</h2>
        </div>
      </div>
    </div>
  </>
);
  
  export default CurrentWeather;