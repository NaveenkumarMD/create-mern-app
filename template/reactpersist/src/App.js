import {store,persistor} from './store'
import { PersistGate } from 'redux-persist/integration/react'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import Main from './Components/Screens/Main';
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Route path="/" component={Main} exact />
      </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
