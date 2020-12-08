import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { searchAsc } from './actions/weather';

const App = () => {

  const results = useSelector(state => state.weatherReducer);
  const dispatch = useDispatch();

  const search = (ev) => {
    ev.preventDefault();
    const city = ev.target.city.value;
    console.log(`The city is ${city}`);
    dispatch(searchAsc(city));
  }

  return (
    <div className="App">
      <form onSubmit={(ev) => {search(ev)}}>
        <input type='text' name='city'/>
        <button>Search</button>
       </form>
       <div>
        <table>
          <tr>
            <td>City</td>
            <td>Thermal</td>
            <td>Humidity</td>
            <td>Pressure</td>
            <td>Temperature</td>
            <td>Max</td>
            <td>Min</td>
          </tr>
            {
              results.map((item)=>{
                return (
                  <tr key={Math.random()}>
                    <td>{item.name}</td>
                    <td>{item.main.feels_like}</td>
                    <td>{item.main.humidity}</td>
                    <td>{item.main.pressure}</td>
                    <td>{item.main.temp}</td>
                    <td>{item.main.temp_max}</td>
                    <td>{item.main.temp_min}</td>
                  </tr>
                )
              })
            }
        </table>
       </div>
    </div>
  );
}

export default App;
