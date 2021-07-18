import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { useSelector, useDispatch } from 'react-redux'
import Rootreducer from './Reducer/Rootreducer'
const store = createStore(Rootreducer)
function App() {

  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}

export default App;
function Home(){
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
    <div style={{ textAlign: "center" }}>
      <h1>Naveenkumar M</h1>
    </div>
    <header className="App-header">
      <h1>{counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
    </header>
  </div>
  )
}
