import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const data = useSelector(state => state.example.data);
  const dispatch = useDispatch();

  const setData = (newData) => {
    dispatch({ type: 'SET_DATA', payload: newData });
  };

  return (
    <div className="App">
     <div>
      <h1>Data: { data }</h1>
      <button onClick={() => setData('New Data')}>Set Data</button>
    </div>
    </div>
  );
}

export default App;


