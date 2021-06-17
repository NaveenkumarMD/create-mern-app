import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route,} from 'react-router-dom'
import Hello from './Components/Screens/Hello'
import Home from './Components/Screens/Home';
function App() {
  return (
    <BrowserRouter>
      <Route component={Hello} path="/hello"  exact/>
      <Route component={Home} path="/"  exact/>
    </BrowserRouter>
  );
}

export default App;
