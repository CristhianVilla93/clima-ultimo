import './datosdia.css'

let humedad = 90;

function Location() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="29"
      viewBox="0 -960 960 960"
      width="29"
      fill= '#E7E7EB'
      
    >
      <path d="m321-292 159-72 159 72 5-5-164-397-164 397 5 5ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
    </svg>
  );
}

  const Datosdia = ({ currentWeather }) => (
    <>
     {console.log("hola",currentWeather)}
      <h3>Today`s Hightlights</h3>

     {/*  {currentWeather.weather.map((weather) => (
        <div key={weather.id} className='datosdelcuadrado'>
          <div className="datos">
            <p>Wind status</p>
            <h1>{currentWeather.wind.speed} <span className='letritas'>mph</span></h1>
            <div className='location1'>
              <Location />
              <p>wsw</p>
            </div>
          </div>
          <div className="datos">
            <p>Humidity</p>
            <h1>{currentWeather.main.humidity} <span className='letritas'>%</span></h1>
            <div>
              <div className='porcent'><span className='letra'>0</span> <span className='letra'>50</span> <span className='letra'>100</span></div>
              <div className='humedad'>
                <div style={{backgroundColor:'#FFEC65', height: '100%',
                width:`${currentWeather.main.humidity}%`, borderRadius: '5px'}}></div>
              </div>
              <div className='letra1'>%</div>
            </div>
          </div>
          <div className="dato1">
            <p>Visibility</p>
            <h1>{currentWeather.visibility} <span className='letritas'>miles</span></h1>
          </div>
          <div className="dato1">
            <p>Air pressure</p>
            <h1>{currentWeather.main.pressure} <span className='letritas'>mb</span></h1>
          </div>
        </div>
      ))} */}
    </>
  );
  
  export default Datosdia;