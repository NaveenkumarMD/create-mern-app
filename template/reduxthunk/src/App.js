import store from './store'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import Main from './Components/Screens/Main';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Main} exact />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
