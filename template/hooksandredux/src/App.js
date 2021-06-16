import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
function App() {
  const counter=useSelector(state=>state.counter)
  const dispatch=useDispatch()
  console.log(counter)
  return (
    <div className="App">
      <div style={{textAlign:"center"}}>
      <h1>Naveenkumar M</h1>
      </div>
      <header className="App-header">
      <h1>{counter}</h1>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>INCREMENT</button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>DECREMENT</button>
      </header>
    </div>
  );
}

export default App;
