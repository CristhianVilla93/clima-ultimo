import './cityInput.css'

const CityInput = ({ value, onChange, onClick, handleSideBar }) => (
    <>
    <nav id='cierre'>
      <button id='botonclose' onClick={handleSideBar}>X</button>
    </nav>
    <div className="botonsearch">
      <input type="text" value={value} onChange={onChange} placeholder='search location'/>
      <button onClick={onClick}>Search</button>
    </div>
    </>
  );
  
  export default CityInput;