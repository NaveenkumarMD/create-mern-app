import { applyMiddleware, compose,createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Reducers/index'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
 
const persistConfig = {
  key: 'root',
  storage,

}
const persistedreducer=persistReducer(persistConfig,rootReducer)
const initialState={

}
const middleware=[thunk]
export const store=createStore(
    persistedreducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
    )
)
export const persistor=persistStore(store)